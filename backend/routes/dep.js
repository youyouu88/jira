async function getDep(req,res) {
    try {
        let d= await Department.find();
        res.json(d);
        
    } catch (error) {
        res.status(500).json({ error: err.message }); // handle errors
    }
}