UPDATE cart_items
SET quantity = $2
WHERE id = $1;
