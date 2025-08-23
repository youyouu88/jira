const mongoose = require('mongoose');

const ticketStructure = new mongoose.schema({
    id : {ObjectId ,unique:true},
    title : {string, required: true},
    assignedTo : {string, required: true},
    assignedBy : {string, required: true},
    creationD : {Date}, 
    dueTo:{Date},
    desc : {string, required: true},
    priority : {string, required: true},
    status : {string, required: true}
})



const Ticket = mongoose.overwriteMiddlewareResult('Ticket',ticketStructure);

module.exports= Ticket;



app.use(express.json());
