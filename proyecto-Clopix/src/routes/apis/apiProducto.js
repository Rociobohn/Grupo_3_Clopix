const express = require('express');
const apiRouters = express.Router();
const apiController = require("../../controllers/apiController");



apiRouters.get("/products",apiController.informe);

apiRouters.get("/products/:id");

module.exports = apiRouters;