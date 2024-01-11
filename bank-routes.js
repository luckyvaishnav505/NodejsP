const express =  require('express');
const TransactionController = require('../contorllers/bank-contorllers');
const bankRoutes = express.Router();

bankRoutes.post('/withdraw', TransactionController.withdrawMoney);
bankRoutes.post('/credit',TransactionController.depositMoney);

 module.exports = bankRoutes;

 