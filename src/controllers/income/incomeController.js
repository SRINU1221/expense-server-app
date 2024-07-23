const expressAsyncHandler = require("express-async-handler");

const Income = require("../../model/Income");


//create 
const createIncCtrl = expressAsyncHandler(async (req,res)=>{
    const {title,description,amount, user} = req.body;
    try {
        const income = await Income.create({
            title,
            description,
            amount,
            user
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch all the records
const fetchIncCtrl = expressAsyncHandler(async (req,res)=>{
    console.log(req?.user);
    const {page} = req.query;
    try {
        const income = await Income.paginate({},{limit:10, page: Number(page) , populate:'user'});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});


//fetch the details of the records
const fetchInDetailCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//update income
const updateIncCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    const {title,description,amount} = req.body;
    try {
        const income = await Income.findByIdAndUpdate(
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
    res.json(income);
    } catch (error) {
      res.json(error);  
    }
});

//delete the income record from the Income table in the mongoo
const deleteIncCtrl = expressAsyncHandler( async (req,res)=>{
    const {id} = req?.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
})

module.exports = {createIncCtrl, fetchIncCtrl, fetchInDetailCtrl , updateIncCtrl, deleteIncCtrl};