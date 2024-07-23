const express = require('express');
const { createIncCtrl, fetchIncCtrl, fetchInDetailCtrl, updateIncCtrl, deleteIncCtrl } = require('../../controllers/income/incomeController');
const authMiddleware = require('../../middlewares/authMiddleware');


const incRoute = express.Router();
//create 
incRoute.post('/income',authMiddleware,createIncCtrl);
incRoute.get('/fetchallincome',authMiddleware,fetchIncCtrl);
incRoute.get('/fetchindetail/:id',authMiddleware,fetchInDetailCtrl);
incRoute.put('/updateincome/:id',authMiddleware, updateIncCtrl);
incRoute.delete('/deleteincome/:id',authMiddleware, deleteIncCtrl);

module.exports = incRoute;