const mongoose=require('mongoose');
const{Schema}=mongoose;
const studentschema= new Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
    },
    department:{
        type:String,
    },
    phone:{
        type:Number,
    },
})
module.exports=mongoose.model("student",studentschema)

    





        