INSERT INTO cart_items (cart_id, product_id, quantity)
VALUES ($1, $2, default)
RETURNING *;
