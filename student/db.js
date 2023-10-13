const mongoose=require('mongoose');
const MongoURI="mongodb://127.0.0.1/mern2023"
const ConnectToMongo=async()=>{
    try{
        await mongoose.connect(MongoURI);
        console.log('connect to Mongo is successful.');

    }
    catch(err){
        console.log('Connect to Mongo is unsuccessful.',err);
    }
}
module.exports=ConnectToMongo;