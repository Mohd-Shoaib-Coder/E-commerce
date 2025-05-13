const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({

    firstName:{

        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },

    email:{

        type:String,
        required:true,
        unique:true,
        match:[/.+@.+\..+/, "Invalid email format"],
    },

    number:{
        type:Number,
        required:true,
    
    },

    password:{

        type:String,
        required:true,
    },
})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;
