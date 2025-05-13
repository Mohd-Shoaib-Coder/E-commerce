const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const app=express();
const userModel=require("./Models/user");
const cartModel=require("./Models/cart")
const bcrypt = require('bcrypt');
const saltRounds=10;
const jwt=require("jsonwebtoken")



mongoose.connect("mongodb+srv://000sheikhsiddiqui:EbNEyTIsgtX3B7su@cluster0.8jisy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
.then(()=>{console.log("Database connected") })
.catch((err)=>console.error("MongoDB connection err:",err))



app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true
}));




app.get("/",function(req,res){
    res.send("i am working")
});



app.post("/signup",async function(req,res){

const {firstname,lastname,email,number,password}=req.body;

const salt=bcrypt.genSaltSync(saltRounds);
const hash=bcrypt.hashSync(password,salt);


try{

    const user= await userModel.create({

        firstName: firstname,
        lastName: lastname,
        email,
        number,
        password: hash,
    
    })
res.status(201).json({message: "signup successfull",
                         status: true,
    })

}catch(err){

    res.status(500).json({err:"Network connection error"})
}
})




app.post("/login",async function (req, res) {
   
const {email,password}=req.body;


try{



    const user=await userModel.findOne({email});

    if(!user){

        return res.status(404).json({message:"User not Found"})
    }



    const hash=user.password;
    const check=await bcrypt.compare(password,hash)


    if(check){

        const token=jwt.sign({},"abbajabbadabba");
        res.cookie("token",token,{ httpOnly: true })
        return res.status(200).json({meassage:"Login Successfull"})
    
    }else{

        return res.status(401).json({ message: "Invalid credentials" });
    }

}catch(err){

    console.log("Error",err);
    return res.status(501).json({error:"Network connection error"})
}


})




// app.post("/cart",function(req,res){

//    const cartItem=cartModel.create({
    
//     title,
//     price,
//     image,

//    })
// });





const Port=4000;

app.listen(Port,

    console.log(`Server is runnning on ${Port}`)
)

//Yh4oYi574SUrUUP9
//EbNEyTIsgtX3B7su

//Products api
//https://dummyjson.com/products?limit=50