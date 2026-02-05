const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');   // 설치된 cors 가져오기
const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");
require('dotenv').config();
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;


app.use(cors());  //cors 사용하기
app.use(bodyParser.json());
app.use("/api", indexRouter);


const mongoURI = MONGODB_URI_PROD;

mongoose.connect(mongoURI).then(()=> {
    console.log("mongoose connected");
})
.catch((err)=> {
    console.log("DB connection fail", err);
});

app.listen(5000, () =>{
    console.log("sever on 5000");
});