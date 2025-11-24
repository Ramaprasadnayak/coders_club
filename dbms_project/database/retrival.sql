USE ElectroHub;


--retrive itemName,price,image_path,reviews of items which belong to the table popular products 
SELECT itemName,price,image_path,reviews
FROM items i
JOIN popular_products p
ON p.itemId=i.itemId;


-- retrive itemname,category,price,imgepath reviews from items where userid=? in cart 
SELECT i.itemId,i.itemName,i.category,i.price,i.image_path,i.reviews,c.qty FROM items i
JOIN cart c 
ON c.itemId=i.itemId
WHERE c.userId=12;


SELECT * FROM items;
SELECT * FROM cart;
SELECT * FROM users;


DESCRIBE items;