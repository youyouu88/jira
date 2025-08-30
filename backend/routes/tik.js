const express = require('express');
const router = express.Router();

const getID = require('../controllers/ticketG');
const get = require('../controllers/tikGst');
const post = require('../controllers/ticketP');
const due=require('../controllers/tikDue')


router.get('/id/:id',getID);
router.get('/status/:status',get);
router.get('/soon',due);
router.post('/', post);

module.exports=router;

