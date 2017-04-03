SELECT * FROM cart_items
WHERE cart_id = $1 AND product_id = $2;
