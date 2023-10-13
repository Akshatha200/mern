const express=require('express')
const mongodbConnection=require('./db')
mongodbConnection()
const app=express();
app.use(express.json())
app.use('/api/product',require('./router/productrouter'));

app.get('/greeting',(req,res)=>{
console.log("Hello,")
res.send("this is your first Api")
})

const port=4000;
app.listen(port,()=>{
    console.log("App is listening on"+port);

})