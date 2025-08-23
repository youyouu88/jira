const mongoose = require('mongoose');

const depStructure=new mongoose.Schema({
    departmentID : {string, required:true, unique:true},
    departmentName : {string, required:true, unique:true}
})


const Department = mongoose.overwriteMiddlewareResult('Department',depStructure);

module.exports= Department;