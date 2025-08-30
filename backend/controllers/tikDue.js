const Ticket = require("../modules/ticket");

async function tikDueD(req,res) {
    try{
        let d = await Ticket.find({status:{$ne:"Open"}}).sort({dueTo:1}).limit(3);
        res.json(d);
    }
    catch(err) {
        res.status(500).json({ error: err.message }); // handle errors
    }
    
}
module.exports= tikDueD;