SELECT * FROM carts
JOIN cart_items
ON carts.id = cart_items.cart_id
JOIN products
ON product_id = products.id
WHERE carts.id = $1;
