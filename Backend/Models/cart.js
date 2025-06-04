const mongoose =require ("mongoose");

const {Schema}=mongoose;


const cartSchema=new Schema({

    user:{

type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true,
    },

title:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true,
},

description:{

    type:String,
    required:true,
},
category:{

     type:String,
    required:true,
},
image:{
    type:String,
    required:true,
},
quantity:{

    type:Number,
    default:1,
    min:1
}


});

const cartModel=mongoose.model("cart",cartSchema);

module.exports=cartModel;