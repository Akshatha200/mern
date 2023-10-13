const express = require('express');
const app=express();
const Task =require('./Task');
const Task2 = require('./Task2');
const ConnectToMongo = require('./db');

const port=3000;

app.use(express.json())
app.use('/api/student',require('./router/studentrout'))

Task();
// Task2(10,20);
ConnectToMongo();

app.listen(port,()=>{
    console.log(`App is listenning on port ${port}`);
})
const student=[
    {name:'xyz',age:'20',department:'BCA',email:'xyz@gmail.com'},
    {name:'xy',age:'24',department:'MCA',email:'xy@gmail.com'},
    {name:'pqr',age:'25',department:'MBA',email:'pqr@gmail.com'},

]
    app.get('/student', async(req,res)=>{
        res.send(student);
    });





