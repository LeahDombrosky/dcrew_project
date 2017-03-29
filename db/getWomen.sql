SELECT name, price, img1
FROM products
WHERE display = TRUE AND category like 'women'
ORDER BY id;
