const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/users/usersRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const app = express();

//env
dotenv.config();

//db connect
dbConnect();

//middleware
app.use(express.json());

//routes
app.use('/api/expensestracker', userRoute);


//error
app.use(notFound);
app.use(errorHandler);



module.exports = app;