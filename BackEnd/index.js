const express = require("express");
const app = express();
const fs = require("fs");
const plansRoutes = require("./routes/plansRoutes");
const pricesRoutes = require("./routes/pricesRoutes");
const beneficiariosRoutes = require("./routes/beneficiariosRoutes");
const propostasRoutes = require("./routes/propostasRoutes");
const cors = require("cors");
const port = 3000;

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/plans", plansRoutes.routes);
app.use("/prices", pricesRoutes.routes);
app.use("/beneficiarios", beneficiariosRoutes.routes);
app.use("/propostas", propostasRoutes.routes);

app.listen(port, () => {
  console.log(`Rodando servidor na porta ${port}`);
});
