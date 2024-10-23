const express=require("express");
const router=express.Router();
const studentModel=require("../model/studentModel");
const {getAllproducts, postAllproducts, putAllproducts, deleteAllproducts, getoneproduct} = require("../controller/productcontroller");
router.use(express.json());





router.post("/",postAllproducts)

router.get("/",getAllproducts);


router.get("/:id",getoneproduct);





router.delete("/:id",deleteAllproducts)
router.put("/:id",putAllproducts)
module.exports=router;






    









