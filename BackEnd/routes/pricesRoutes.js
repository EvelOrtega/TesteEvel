const express = require("express");
const router = express.Router();

const { getPrices } = require("../controllers/pricesController");

router.get("/", getPrices);

module.exports = {
  routes: router,
};
