const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors');
const connectDB = require('./DBconfig/dbConnection')

dotenv.config();
connectDB();
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/app/user',require('./routes/userRoutes'));
app.use('/app/quiz',require('./routes/quizRoutes'));

const PORT = process.env.PORT || 3000;



app.listen(PORT,()=>console.log(`server running at ${PORT}`));