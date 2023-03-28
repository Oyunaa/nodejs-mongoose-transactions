const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URI);

const conn = mongoose.connection;

conn.on("error", () => console.error.bind(console, "connection error"));

conn.once("open", () => console.info("Connection DB is successful"));

module.exports = conn;
