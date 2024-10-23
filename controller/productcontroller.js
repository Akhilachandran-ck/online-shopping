
const product=require('../model/studentModel');
const getAllproducts=async(req,res)=>{
    try {
        var data=await product.find();
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    
    }
    
    
    }







    const getoneproduct=async(req,res)=>{
        try {
            var data=await product.findById(req.params.id);
            res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({error:error.message});
        
        }
        
        
        }




   const postAllproducts= async(req,res)=>{
    const{name,price,description,image}=req.body;
        try {
            
    var data1=new product({name,price,description,image});
    await data1.save();
    res.status(201).json(data1);
        } catch (error) { 
            res.status(500).json({error:error.message})
       
        }
    };


   const putAllproducts= async(req,res)=>{




        try {
            await product.findByIdAndUpdate(req.params.id,req.body);
            res.status(201).json("edited successfully");
            
        } catch (error) {
            res.status(500).json({error:error.message});
    
        }
       
    }
    

    const deleteAllproducts=async(req,res)=>{




        try {
            await product.findByIdAndDelete(req.params.id);
            res.status(201).json("deleted successfully");
            
        } catch (error) {
            res.status(500).json({error:error.message});
    
        }
       
    }
    










    module.exports={getAllproducts,postAllproducts,putAllproducts,deleteAllproducts,getoneproduct}