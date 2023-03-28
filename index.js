const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

// const db = await mongoose
//   .createConnection(process.env.MONGO_DB_URI)
//   .asPromise();

// const session = db.startSession();

app.use("/api", userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Success" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is runnig on " + process.env.PORT);
});
