INSERT INTO carts (user_id)
VALUES ($1)
RETURNING *;
