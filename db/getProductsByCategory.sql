SELECT name, price, img1
FROM products
WHERE display = TRUE AND category = $1
ORDER BY id;
