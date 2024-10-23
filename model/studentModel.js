const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({
name:{
    type:String

},
price:{
    type:Number

},

description:{
    type:String

},
image:{
    type:String

}


});


const studentModel = mongoose.model('student',studentSchema);
module.exports=studentModel;