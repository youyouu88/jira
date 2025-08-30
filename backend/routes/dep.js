const express = require('express');
const router = express.Router();
const Department = require('../modules/department');

router.get('/',async (req,res) =>{
    try {
        let d= await Department.find();
        res.json(d);
        
    } catch (error) {
        console.error('Error fetching departments:', error); // Add logging
        res.status(500).json({ error: error.message }); // handle errors
    }
});

console.log('dep.js routes defined');
module.exports= router;
