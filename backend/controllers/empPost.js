const Employee= require('../modules/employee');

async function empPost(req,res) {
    try{
        let d= req.body;
        let e ={
            idEmp : d.idEmp,
            Fname : d.Fname,
            Lname : d.Lname,
            jobTitleEmp : d.jobTitleEmp,
            addressEmp : d.addressEmp,
            departmentID : d.departmentID,
            emailEmp : d.emailEmp,
            phoneEmp : d.phoneEmp,
            hireDateEmp : d.hireDateEmp,
            salaryEmp : d.salaryEmp,
            role : d.role,
            passwordEmp : d.passwordEmp
        };

        let r = await Employee.insertOne(e);
        if (r.acknowledged == true) {
            return res.status(201).json({ 
                message: "Ticket added successfully!",
                ticketId: result.insertedId  
            });
        } 
            
        else {
            return res.status(500).json({ error: "Failed to insert ticket" });
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }

    
}