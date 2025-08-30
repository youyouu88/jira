const Ticket = require("../modules/ticket");

async function tikP(req, res) {
    try {
        
        let d = req.body;
        let t = { 
            title: d.title ,
            assignedTo : d.assignedTo ,
            assignedBy : d.assignedBy,
            created :d.created,
            dueTo : d.dueTo,
            description : d.description,
            status : d.status,
            priority : d.priority
            
        };
        let r = await Ticket.insertOne(t);
        console.log('Insert result:', r);
        
        if (r.acknowledged == true) {
            return res.status(201).json({ 
                message: "Ticket added successfully!",
                ticketId: r.insertedId  
            });
        } 
        
        else {
            return res.status(500).json({ error: "Failed to insert ticket" });
        }

    } 
    
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports=tikP;