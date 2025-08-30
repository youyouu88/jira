const mongoose = require('mongoose');

const ticketStructure = new mongoose.Schema({
    ticketId : {type:String},
    title : {type:String, required: true},
    assignedTo : {type:String, required: true},
    assignedBy : {type:String, required: true},
    created : {type:Date}, 
    dueTo:{type:Date},
    description : {type:String, required: true},
    priority : {type:String, required: true},
    status : {type:String, required: true}
});



module.exports= mongoose.model('Ticket',ticketStructure);

