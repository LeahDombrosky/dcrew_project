const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');

const connectionString = "postgres://daanishnasir@localhost/dcrew";

const massiveInstance = massive.connectSync({
    connectionString: connectionString
});


const app = express();
const port = 3000;


app.set('db', massiveInstance);

const db = app.get("db");




app.use(bodyParser.json());
app.use(cors()); //lets everyone through
app.use(session({
    secret: 'keyboard cat'
}));
app.use(express.static(__dirname + "/public"));




//get products  // get category
app.get("/api/products", function(req, res, next) {
    if (req.query.category) {
        db.getProductsByCategory([req.query.category], function(err, products) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json(products);
            }
        });
    } else {
        db.getProducts(function(err, products) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json(products);
            }
        });
    }
});

//get product

app.get('/api/products/:id', function(req, res, next) {
    console.log(req.params.id);
    db.getUniqueProduct([req.params.id], function(err, product) {
        if (err) {
            return next(err);

        } else {
            return res.status(200).json(product);
        }
    });
});




//cart

app.get('/api/cart/:id', function(req, res, next) {
    console.log(req.params.id);
    db.getProductsInCart([req.params.id], function(err, products) {
        if (err) {
            return next(err);
        }
        return res.status(200).json(products);
    });
});
//post to cart

app.post('/api/cart/:id', function(req, res, next) {
    // First, see if cart exists for user
    db.getCart([req.params.id], function(err, carts) {
        if (err) {
            return next(err);

        // If cart exists, carts will have one cart object => carts.length = 1
        } else if (carts.length) {
            // If user cart exists assign cart variable the cart
            // and see if item exists in cart
            console.log("Carts from GetCarts: ", carts);
            const cart = carts[0];
            db.findItemInCart([cart.id, req.body.id], function(err, itemsFound) {
              console.log("Find Item in Cart", itemsFound)
              if (err) {
                return next(err)
              } else if (itemsFound.length) {
                // if items exist, change quantity
                const item = itemsFound[0];
                // Item will have id, cart_id, product_id, and quantity
                const quantity = item.quantity + 1;

                console.log("Quantity: ", quantity)
                db.UpdateItemInCart([item.id, quantity], function(err, updatedItem) {
                  if (err) {
                    return next(err)
                  }
                  return res.status(200).json(cart)
                  // This isn't exactly what we want yet; we need to check the cart
                })

              } else {
                // If item not found, add new item to existing cart
                // Call addToCart with cartId and productId
                db.addToCart([cart.id, req.body.id], function(err, cartItems) {
                  if (err) {
                    return next(err);
                  }
                  console.log("CartItems from existing cart: ", cartItems);
                  // Return cart
                  return res.status(200).json(cart);
                });

              }
            })



        // If cart doesn't exist, this will run
        } else {
            // Create cart for user id
            db.createCart([req.params.id], function(err, carts) {
                if (err) {
                    return next(err);

                }
                console.log("Created cart: ", carts[0]);
                const cart = carts[0];

                // Add product to cart
                db.addToCart([cart.id, req.body.id], function(err, cartItems) {
                    if (err) {
                        return next(err);
                    }
                    console.log("Cart items from new cart: ", cartItems);
                    return res.status(200).json(cart);
                });
            });
        }
    });



});



//delete from cart
app.delete('/api/cart/:id', function(req,res,next){
  console.log(req.query);
  db.findProductAndDelete([req.params.id, req.query.productId], function (err, cartItem){
    if(err){
      return next(err);
    }
    console.log("Deleting this item from cart", cartItem);
    return res.status(200).json(cartItem);
  })
})








app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



// app.get("/api/products/:category", function(req, res, next){
//   if(req.params.category === "men"){
//     db.getMen(function(err, products){
//         if (err) {
//           return next(err)}
//         else {
//             return res.status(200).json(products)
//         }
//     })
//
//   }
//   else if(req.params.category === "women"){
//     db.getWomen(function(err, products){
//         if (err) {
//           return next(err)}
//         else {
//             return res.status(200).json(products)
//         }
//     })
//   }
//
//
//
// })
