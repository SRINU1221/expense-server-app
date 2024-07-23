const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/users/usersRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const incRoute = require('./routes/income/incomeRoute');
const expensesRoute = require('./routes/expenses/expenseRoute');

const app = express();

//env
dotenv.config();

//db connect
dbConnect();

//middleware
app.use(express.json());

//users routes
app.use('/api/expensestracker', userRoute);

//income routes
app.use('/api/expensestracker',incRoute);

//expense routes
app.use('/api/expensestracker',expensesRoute);


//error
app.use(notFound);
app.use(errorHandler);




module.exports = app;