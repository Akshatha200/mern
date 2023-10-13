const mongoose=require('mongoose');
const{Schema}=mongoose;
const studentSchema= new Schema({
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
})
module.exports=mongoose.model("student",studentSchema)
