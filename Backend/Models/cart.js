const mongoose =require ("mongoose");

const {Schema}=mongoose;


const cartSchema=new Schema({


title:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true,
},
image:{
    type:String,
    required:true,
}


});

const cartModel=mongoose.model("cart",cartSchema);

module.exports=cartModel;