const express = require('express');
const { createExpenseCtrl, fetchExpenseCtrl, fetchExpenseDetailCtrl, updateExpenseCtrl, deleteExpenseCtrl } = require('../../controllers/expenses/expenseCntlr');
const authMiddleware = require('../../middlewares/authMiddleware');

const expensesRoute = express.Router();

expensesRoute.post('/createexpense',authMiddleware,createExpenseCtrl);
expensesRoute.get('/fetchallexpenses',authMiddleware,fetchExpenseCtrl);
expensesRoute.get('/fetchexpenseindetail/:id',authMiddleware,fetchExpenseDetailCtrl);
expensesRoute.put('/updateexpense/:id',authMiddleware, updateExpenseCtrl);
expensesRoute.delete('/deleteexpense/:id',authMiddleware, deleteExpenseCtrl);

module.exports = expensesRoute;