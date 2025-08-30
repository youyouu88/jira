const mongoose = require('mongoose');

const empStructure=new mongoose.Schema({
    idEmp:{type:String, required: true, unique: true},
    Fname:{type:String, required: true},
    Lname:{type:String, required: true},
    jobTitleEmp:{type:String, required: true},
    addressEmp:{type:String, required: true},
    departmentID:{type:String, required: true},
    emailEmp:{type:String, required: true, unique: true},
    phoneEmp:{type:String, required: true, unique: true},
    hireDateEmp:{type:Date, required: true},
    salaryEmp:{type:Number, required: true},
    role:{type:Number, required: true, default: 0}, // 0: User, 1: Admin
    passwordEmp:{type:String, required: true}
});


module.exports= mongoose.model('Employee',empStructure);