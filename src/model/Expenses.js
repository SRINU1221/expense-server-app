const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

const expensesSchema = mongoose.Schema({
    title:{
        required:[true, 'title is required'],
        type:String
    },
    description:{
        required: [true, 'description is required'],
        type: String
    },
    type:{
        type:String,
        default:'expense',
    },
    amount:{
        required : [true, 'amount is required'],
        type: Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: [true, 'user id is required']
    },
},{timestamps: true,
    toJSON:{virtuals: true},
    toObject:{
        virtuals:true
    }

});

//pagination
expensesSchema.plugin(mongoosePaginate);

const Expense = mongoose.model("Expense",expensesSchema);

module.exports = Expense;