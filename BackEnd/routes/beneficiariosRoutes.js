const express = require("express");
const router = express.Router();

const {
  getBeneficiarios,
  getBeneficiariosById,
  addBeneficiario,
  updateBeneficiario,
  deleteBeneficiario,
} = require("../controllers/beneficiariosController");

router.get("/", getBeneficiarios);
router.get("/:id", getBeneficiariosById);
router.post("/", addBeneficiario);
router.put("/:id", updateBeneficiario);
router.delete("/:id", deleteBeneficiario);

module.exports = {
  routes: router,
};
