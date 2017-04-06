SELECT products.id, name, description, color, price, img1, img2, img3, img4, reviews.review
FROM products
LEFT JOIN REVIEWS ON products.id = reviews.product_id
WHERE products.id = $1;


--not sure.
