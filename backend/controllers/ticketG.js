const Ticket = require("../modules/ticket");

async function getTic (req,res){
    try{
        let id=req.params.id;
        let data = await Ticket.findById(id);
        if(!data){
           return res.status(404).json({ message: "Ticket not found" });
        }
        res.json(data);
    }
    catch(error) {
        res.status(500).json({ error: error.message }); // handle errors
    }
}

module.exports=getTic;