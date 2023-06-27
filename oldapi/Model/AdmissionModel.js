const mongoose = require('mongoose');

const Admissionschema = new mongoose.Schema({
    surname:{
        type:String
    },
    stu_name:{
        type:String
    },
    father_name:{
        type:String
    }
});

const AdmissionModel = mongoose.model('Admission', Admissionschema);

module.exports = AdmissionModel;