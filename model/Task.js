const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 스키마 만들기
const taskSchema = Schema({
    task:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        required:true
    }
})

// Task 라는 모델 만들기
const Task = mongoose.model("Task", taskSchema);

// 반출하기
module.exports = Task;