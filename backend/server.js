const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const route = require('./routes/route');
const connection = require('./connectdb/connection');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/quiz',route)

const PORT = process.env.PORT || 5000;

app.listen( PORT,
    ()=>{
        console.log(`Server is running on port ${PORT}`)
        connection()
    }
);