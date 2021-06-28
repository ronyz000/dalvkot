var express = require('express');
var router = express.Router();
var infocontroller=require('../controllers/personalInfo')
var mongoClient=require('mongodb').MongoClient
router.post('/info',infocontroller.createInfo)
router.get('/show',infocontroller.getInfo)
router.get('/showall',infocontroller.getInfos)
router.put('/infoedit/:id',infocontroller.getallInfos)
module.exports = router;
