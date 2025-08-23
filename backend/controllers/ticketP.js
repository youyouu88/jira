const Ticket = require("../modules/ticket");

async function tikP(req, res) {
    try {
        let d = req.body;
        
        let r = await Ticket.insertOne({ title: d.title });
        
        if (r.acknowledged === true) {
            return res.send("ticket added!");
        } else {
            return res.status(500).json({ error: "Failed to insert ticket" });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}