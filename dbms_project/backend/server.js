import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Ramprasad@18",
  database: "electrohub",
});

db.connect(err => {
  if (err) console.log("Database connection failed", err);
  else console.log("Connected to MySQL");
});


app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users(userName, email, password) VALUES(?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error registering user");
    }
    const fetchSql = "SELECT * FROM users WHERE email = ?";
    db.query(fetchSql, [email], (err2, userResult) => {
      if (err2) return res.status(500).send("Error fetching user data");

      res.json({
        message: "Signup successful",
        userId: userResult[0].userId,
        name: userResult[0].userName,
        email: userResult[0].email
      });
    });
  });
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], async (err, result) => {
    if (err) return res.status(500).send("Error checking login");

    if (result.length > 0) {
      if (result[0].password === password) {
        return res.json({
          message: "Login successful",
          userId: result[0].userId,
          name: result[0].userName,
          email: result[0].email
        });
      }
    }
    res.status(401).send("Invalid email or password");
  });
});

app.post("/location", (req, res) => {
  const { userid, location } = req.body;
  const sql = "UPDATE users SET location = ? WHERE userId = ?";

  db.query(sql, [location, userid], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database update failed");
    }
    console.log("Location updated successfully for user:", userid);
    res.json({ location });
  });
});

app.get("/popular", (req, res) => {
  const sql = `
    SELECT i.itemId, i.itemName, i.price,i.category,i.company, i.image_path, i.reviews
    FROM items i JOIN popular_products p 
    ON p.itemId = i.itemId;
  `;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database fetch failed");
    }
    res.json(result);
  });
});

app.get("/newProducts", (req, res) => {
  const sql = `
    SELECT i.itemId, i.itemName,i.category,i.company, i.price, i.image_path, i.reviews
    FROM items i 
    JOIN new_products p ON p.itemId = i.itemId;
  `;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database fetch failed");
    }
    res.json(result);
  });
});


app.post("/cart", (req, res) => {
  let { userId, itemId, qtyval } = req.body;
  if(!qtyval) qtyval=1;
  const sql = "INSERT INTO cart(userId,itemId,qty) VALUES(?, ?,?) ON DUPLICATE KEY UPDATE qty = qty + VALUES(qty)";
  db.query(sql, [userId, itemId,qtyval], (err, result) => {
    if (err) {
      console.error("Error entering data in cart:", err);
      return res.status(500).json({ message: "Failed to add item to cart" });
    }
    res.status(200).json({ message: "Item added to cart successfully" });
  });
});

app.get("/cartpage", (req, res) => {
  const { uid } = req.query;

  const sql = `
    SELECT 
      c.cartId,
      i.itemId, 
      i.itemName, 
      i.category, 
      i.price, 
      i.image_path, 
      i.reviews, 
      c.qty,
      (SELECT SUM(i2.price * c2.qty)
       FROM items i2
       JOIN cart c2 ON c2.itemId = i2.itemId
       WHERE c2.userId = ?) AS total_price
    FROM items i
    JOIN cart c ON c.itemId = i.itemId
    WHERE c.userId = ?;
  `;

  db.query(sql, [uid, uid], (err, result) => {
    if (err) {
      console.error("Error retrieving the cart details:", err);
      return res.status(500).json({ message: "Failed to fetch the cart details" });
    }

    res.status(200).json(result);
  });
});



app.post("/deletecart", (req, res) => {
  const { cid } = req.body;
  const sql = `
    DELETE FROM cart WHERE cartId=?;
  `;

  db.query(sql, [cid], (err, result) => {
    if (err) {
      console.error("Error deleting cart details:", err);
      return res.status(500).json({ message: "error" });
    }
    res.status(200).json({ message: "deleted successfully" });
  });
});



app.post("/ItemLists/:category",(req,res)=>{
  const cat = req.params.category; 
  const sql=`SELECT itemId ,itemName ,category ,price ,company, image_path, reviews FROM items WHERE category=?`;
  db.query(sql,[cat],(err,result)=>{
    if(err){
      console.error("Error finding details:", err);
      return res.status(500).json({ message: "error" });
    }
    res.json(result);
  })
});


app.listen(5000, () => console.log("Server running on port 5000"));
