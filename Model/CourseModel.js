const { default: mongoose } = require('mongoose');
var validator = require('validator');
const { validate } = require('../Model/LoginModel');

var courseschema = new mongoose.Schema({

    coursename:{
        type:String,
        required:[true,"course name require"],
        unique:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
})

var courseModel = mongoose.model('course',courseschema);

module.exports = courseModel;


