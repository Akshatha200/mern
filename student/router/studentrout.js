const express=require("express")
const {Studentinsert,DisplayStudent, DeleteStudent,Get_Single_Student, StudentUpdate} =require("../controller/studentcontroller")
const { get } = require("mongoose")

const router=express.Router();
router.post('/insert',Studentinsert);
router.get('/display',DisplayStudent);
router.delete('/delete/:id',DeleteStudent);
router.get('/single_view/:id',Get_Single_Student);
router.put('/update/:id',StudentUpdate);
module.exports=router;