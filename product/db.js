const mongoose=require('mongoose');
// const mongoUrl="mongodb://localhost:27017/mernb"
const mongoUrl="mongodb://127.0.0.1:27017/mernb"
const mongodbConnection= async()=>{
try{
    await mongoose.connect(mongoUrl);
    console.log("Mongodb connected successful");
}
catch(err){
    console.error(`error connnecting to mongodb ${err}`);
   }

}
 module.exports=mongodbConnection