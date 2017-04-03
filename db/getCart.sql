SELECT * FROM carts
WHERE user_id = $1 AND active = TRUE;
