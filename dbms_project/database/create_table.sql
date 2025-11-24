-- Active: 1762100041554@@127.0.0.1@3306@electrohub
-- Create the database
DROP DATABASE ElectroHub;

CREATE DATABASE ElectroHub;
USE ElectroHub;
-- Create users table
CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);


-- Create items table
CREATE TABLE items (
    itemId INT AUTO_INCREMENT PRIMARY KEY,
    itemName VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    company VARCHAR(100) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    reviews INT NOT NULL
);


-- Create popular table
CREATE TABLE popular_products (
    p_id INT PRIMARY KEY,
    itemId INT NOT NULL,
    FOREIGN KEY (itemId) REFERENCES items(itemId) ON DELETE CASCADE
);


-- Create new products table
CREATE TABLE new_products (
    new_id INT PRIMARY KEY,
    itemId INT NOT NULL,
    FOREIGN KEY (itemId) REFERENCES items(itemId) ON DELETE CASCADE
);


-- Create cart table
CREATE TABLE cart (
    cartId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    itemId INT NOT NULL,
    qty INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    FOREIGN KEY (itemId) REFERENCES items(itemId) ON DELETE CASCADE
);


-- Create orders table
CREATE TABLE orders (
    orderId INT AUTO_INCREMENT PRIMARY KEY,
    cartId INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (cartId) REFERENCES cart(cartId) ON DELETE CASCADE
);


-- Create liked table 
CREATE TABLE likedTable(
    likedId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    itemId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    FOREIGN KEY (itemId) REFERENCES items(itemId) ON DELETE CASCADE
);
