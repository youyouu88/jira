const Employee = require('../modules/employee');
const Department = require('../modules/department');

async function getEMPS(req,res) {
    try{
        let dep = req.params.d;
        let i = await Department.findOne({departmentName:dep});
        let n=i.departmentID;
        let d = await Employee.find({departmentID:n});

        if(!d){
           return res.status(404).json({ message: "Employees not found" });
        }

        res.json(d);
    }
    catch(error) {
        res.status(500).json({ error: error.message }); // handle errors
    }
    
    
};
module.exports=getEMPS;