const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


const PORT = 3000;



app.listen(PORT,()=>console.log(`server running at ${PORT}`));