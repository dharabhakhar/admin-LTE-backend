const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    email:{
        type:String,default:"admin@gmail.com"
    },
    password:{
        type:String,default:"admin@123"
    }
});

const Adminmodel = mongoose.model('Admin', Admin);

module.exports = Adminmodel;