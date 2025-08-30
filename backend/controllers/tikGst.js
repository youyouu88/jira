const Ticket = require("../modules/ticket");

async function getTic (req,res){
    try{
        let status=req.params.status;
        let data = await Ticket.find({status:status});
        if(!data){
           return res.status(404).json({ message: "Ticket not found" });
        }
        res.json(data);
    }
    catch(err) {
        res.status(500).json({ error: err.message }); // handle errors
    }
}

module.exports=getTic;