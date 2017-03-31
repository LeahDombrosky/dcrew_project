SELECT id, name, price, img1
FROM products
WHERE display = TRUE AND category = $1     --category based on html will go to
ORDER BY id;
