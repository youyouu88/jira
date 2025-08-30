const Employee = require("../modules/employee");

async function getEmp (req,res){
    try{
        let id=req.params.id;
        let data = await Employee.find({idEmp:id});
        if(!data){
           return res.status(404).json({ message: "Employee not found" });
        }
        res.json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message }); // handle errors
    }
};

module.exports=getEmp;