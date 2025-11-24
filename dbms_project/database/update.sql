USE ElectroHub;


-- add a column with constraint
ALTER TABLE cart ADD qty int NOT NULL DEFAULT 1;


-- delete from a table
DELETE FROM cart WHERE cartId=?;


-- set autoo increment
ALTER TABLE cart AUTO_INCREMENT = 1;


-- display content 
SELECT * FROM cart;


-- delete a column
ALTER TABLE cart DROP COLUMN qty;


-- set image path
UPDATE items SET image_path="/src/assets/items/ideapad-slim-3.webp" WHERE itemId=2;


ALTER TABLE cart
ADD CONSTRAINT unique_user_item UNIQUE (userId, itemId);