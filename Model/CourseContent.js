const { default: mongoose } = require('mongoose');
var validator = require('validator');

var coursecontentschema = new mongoose.Schema({

    courscontent:{
        type:String,
        
        required:[true,"content require"],

        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course content");
            }
        }
    },
    course_id:{
        required:[true,"couser name require"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
    },
    course_duration:{
       
        type:String,
    }
})

module.exports = mongoose.model('course_content',coursecontentschema);
