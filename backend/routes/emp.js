const express = require('express');
const router = express.Router();

const getO = require('../controllers/empGet');
const getM=require('../controllers/empSget');

//const post = require('../controllers/empPost');

router.get('/id/:id',getO);
router.get('/department/:d',getM);

//router.post('/', post);

module.exports=router;

