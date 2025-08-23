const mongoose = require('mongoose');

const empStructure=new mongoose.Schema({
    id:{string, required: true, unique: true},
    Fname:{string, required: true},
    Lname:{string, required: true},
    jobTitle:{string, required: true},
    addressEmp:{string, required: true},
    departmentID:{string, required: true},
    email:{string, required: true, unique: true},
    phone:{string, required: true, unique: true},
    hireDate:{Date, required: true},
    salary:{Number, required: true},
    role:{Number, required: true, default: 0}, // 0: User, 1: Admin
    password:{string, required: true}
})

const Employee = mongoose.overwriteMiddlewareResult('Employee',empStructure);

module.exports= Employee;