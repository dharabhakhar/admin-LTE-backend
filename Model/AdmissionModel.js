const mongoose = require('mongoose');

const Admissionschema = new mongoose.Schema({

    surname:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    studentname:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    fathername:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    stu_contact_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    parent_contact_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    address:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    dob:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    image:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
     qualification:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    reference:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    course:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    }, 
    parent_whatsapp_no:{
        type:String,
        required:[true,"course name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter Course name");
            }
        }
    },
    
});

const AdmissionModel = mongoose.model('Admission', Admissionschema);

module.exports = AdmissionModel;