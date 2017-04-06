INSERT INTO reviews (product_id, stars, review) VALUES($1, $2, $3)
RETURNING *;
