const studentschema=require('../model/student');
const Studentinsert=async (req, res)=>{
    try{
        const { name, age,email,department, } = req.body;

        const datas = await new studentschema({
            name:name,
            age:age,
            email:email,
            department:department,
        });
        const savedData =await datas.save();
        res.send(savedData);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal some Error occured");
    }
};


const DisplayStudent=async(req,res)=>{
    try{
        const student = await studentschema.find();
        res.json(student)

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal some Error occoured");
    }
};




const  DeleteStudent=async(req,res)=>{
    try{
    let student=await studentschema.findById(req.params.id);
    if(!student){
        return res.status(404).send("Not Found");
    }
    student=await studentschema.findByIdAndDelete(req.params.id);
    res.json({Success:"Student deleted successfully", student:'student'});
 } catch(error){
    console.error(error.message);
    res.status(500).send("Internal some error occured")

    }
}
const Get_Single_Student = async(req,res)=>{
    try{
        const student =await studentschema.findById(req.params.id);
        if(!student){
            res.status(404).send("Student Not Found");
        }
        res.json(student)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Intrnal some error occured");
    }
}
const StudentUpdate = async(req,res)=>{
    const{name,age,email,department}=req.body;
    try{
        const newStudent={};
        if(name){newStudent.name=name};
        if(age){newStudent.age=age};
        if(email){newStudent.email=email};
        if(department){newStudent.department=department};
        let student=await studentschema.findById(req.params.id);
        if(!tudent){
            return res.status(404).send("Not Found");
        }
        student =await studentschema.findByIdAndUpdate(req.params.id,{
        $set:newStudent},{new:true})
        res.json({student});
        }
        catch(error){      
            console.error(error.message);
            res.status(500).send("Internal some Error occured")
        }
    }
    module.exports={Studentinsert,DisplayStudent,DeleteStudent,Get_Single_Student,StudentUpdate};
    

        
    
    
    
    
    
            