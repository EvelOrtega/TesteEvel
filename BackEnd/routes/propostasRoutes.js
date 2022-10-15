const express = require("express");
const router = express.Router();

const {
  getPropostas,
  getPropostasById,
} = require("../controllers/propostasController");

router.get("/", getPropostas);
router.get("/:id", getPropostasById);

module.exports = {
  routes: router,
};
