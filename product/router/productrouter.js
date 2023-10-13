const express=require('express');
const router=express.Router();
const Insert =require('../controller/productcontroller')
router.post('/insert',Insert)
module.exports=router