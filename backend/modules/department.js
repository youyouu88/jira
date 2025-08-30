const mongoose = require('mongoose');

const depStructure = new mongoose.Schema({
    departmentID : {type:String, required:true, unique:true},
    departmentName : {type:String, required:true, unique:true},
    
}
);

module.exports= mongoose.model('Department',depStructure);
