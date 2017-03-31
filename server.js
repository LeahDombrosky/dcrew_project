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







app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
