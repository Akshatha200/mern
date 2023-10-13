const ProductSchema=require('../model/product')

const Insert= async(req,res)=>{
    const{name,desc,price,qty}=req.body;
    let totalAmount=price*qty;
    try{
        const Product=await new ProductSchema({name,description:desc,price,quantity:qty,total:totalAmount})
        const savedproduct=Product.save();
        console.log("product inserted successfully");
        res.json({savedproduct:Product});

    }
    catch(err){
        console.error('Error while inserting product',err);
        req.json(err);

    }
}
module.exports=Insert