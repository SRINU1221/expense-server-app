const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../model/Expenses");




//create 
const createExpenseCtrl = expressAsyncHandler(async (req,res)=>{
    const {title,description,amount, user} = req.body;
    try {
        const expense = await Expense.create({
            title,
            description,
            amount,
            user
        });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//fetch all the records
const fetchExpenseCtrl = expressAsyncHandler(async (req,res)=>{
    const {page} = req?.query;
    try {
        const expense = await Expense.paginate({},{limit:10, page: Number(page),populate:'user'});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});


//fetch the details of the records
const fetchExpenseDetailCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    try {
        const expense = await Expense.findById(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//update income
const updateExpenseCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    const {title,description,amount} = req.body;
    try {
        const expense = await Expense.findByIdAndUpdate(
            id,
            {
                title,
                description,
                amount
            },
            {
                new : true
            }
    );
    res.json(expense);
    } catch (error) {
      res.json(error);  
    }
});

//delete the income record from the Income table in the mongoo
const deleteExpenseCtrl = expressAsyncHandler( async (req,res)=>{
    const {id} = req?.params;
    try {
        const expense = await Expense.findByIdAndDelete(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
})

module.exports = {createExpenseCtrl, fetchExpenseCtrl, fetchExpenseDetailCtrl , updateExpenseCtrl, deleteExpenseCtrl};