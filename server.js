import express from "express";
import mysql from "mysql2";
const app = express();

const conn = mysql.createConnection({
    host: "mysql-sharigift.alwaysdata.net",
    user: "sharigift",
    database: "sharigift_users",
    password: "sharigift2441139",
});

const query = `CREATE TABLE IF NOT EXISTS products (
      id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      img_url VARCHAR(1000) DEFAULT "" , 
      description VARCHAR(1000) DEFAULT "",
      tag VARCHAR(100) DEFAULT "",
      category VARCHAR(100) DEFAULT "",
      stock INT DEFAULT 1,
      rating TINYINT DEFAULT 3,
      gift_items VARCHAR(1000) DEFAULT "",
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      total_sell INT DEFAULT 0,
      total_views INT DEFAULT 0
)`;


const query2 = `INSERT INTO products(id, title, img_url,stock, total_sell ) VALUES("1", "new Shari", "https://sharigift.com/wp-content/uploads/2025/07/Untitled-design-13.webp", 5, 10 )`;

// try{
//     conn.query("SELECT * FROM products", (err, result)=>{
//         if (err) throw err;
//         console.log(result);
// })
// }catch(err){
//     console.log(err);
// }
// conn.end();

app.get("/", (req, res) => {
    res.send("this is home route");
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
