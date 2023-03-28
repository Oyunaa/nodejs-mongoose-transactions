const { Router } = require("express");
const route = Router();
const shipping = require("../controllers/shipping.controller");

route.get("/shipping", shipping.getAll);
route.post("/shipping", shipping.create);

module.exports = route;
