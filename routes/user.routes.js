const { Router } = require("express");
const route = Router();
const user = require("../controllers/user.controllers");

route.get("/user", user.getAll);
route.post("/user", user.register);

module.exports = route;
