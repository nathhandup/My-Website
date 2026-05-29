const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("messages.db");

db.run(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

/* POST MESSAGE */
app.post("/message", (req, res) => {

    const { name, message } = req.body;

    db.run(
        "INSERT INTO messages (name, message) VALUES (?, ?)",
        [name, message],
        (err) => {

            if (err) {
                return res.status(500).send("DB error");
            }

            res.send("Message stored");
        }
    );
});

/* GET MESSAGES */
app.get("/messages", (req, res) => {

    db.all(
        "SELECT * FROM messages ORDER BY created_at DESC",
        [],
        (err, rows) => {
            res.json(rows);
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});