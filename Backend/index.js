const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const app=express();
const userModel=require("./Models/user");
const cartModel=require("./Models/cart")
const cookieParser=require("cookie-parser")
const bcrypt = require('bcrypt');
const saltRounds=10;
const jwt=require("jsonwebtoken")
const verifyUser=require("./Middlewares/verify");



mongoose.connect("mongodb+srv://000sheikhsiddiqui:EbNEyTIsgtX3B7su@cluster0.8jisy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
.then(()=>{console.log("Database connected") })
.catch((err)=>console.error("MongoDB connection err:",err))



app.use(express.json());
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","DELETE", "PUT"],
    credentials:true
}));




app.get("/",function(req,res){
    res.send("i am working")
});


app.get("/verify", verifyUser, async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: true,
      user,
    });
  } catch (err) {
    console.error("Error verifying user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
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

        const token=jwt.sign({id:user._id},"abbajabbadabba");
        
        res.cookie("token",token,{ httpOnly: true , sameSite: "Lax", })
       return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })
    
    }else{

        return res.status(401).json({ message: "Invalid credentials" });
    }

}catch(err){

    console.log("Error",err);
    return res.status(501).json({error:"Network connection error"})
}


})







app.post("/cart", verifyUser, async function(req, res) {
  try {
    
    const { cartItems } = req.body;
   
    const userId = req.userId; 
   

    if (!cartItems) {
      return res.status(400).json({ error: "Missing cartItems in request body" });
    }

    const { title, price, description, category, image, quantity = 1 } = cartItems;
    
    
    const existingItem = await cartModel.findOne({ 
      user: userId,  
      title: title 
    });


    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json({
        message: "Item quantity updated",
        status: true,
        item: existingItem
      });
    } else {
      const newItem = await cartModel.create({
        title,
        price,
        description,
        category,
        image,
        quantity,
        user: userId,  
      });
      
      await newItem.save();

      return res.status(201).json({
        message: "Item added to cart",
        status: true,
        item: newItem
      });
    }
  } catch (err) {
    console.error("Error processing cart:", err);
    res.status(500).json({ 
      error: "Failed to process cart item",
      details: err.message 
    });
  }
});


app.get("/cart",verifyUser,async function(req,res){

try{

  const userId=req.userId;

  const cartItems=await cartModel.find({user:userId});
  return res.status(200).json(cartItems);
}catch(err){
  console.log("Failed to fetch cart",err);
  res.status(500).json({error:"Failed to fetch cart items"})
}

})




app.post("/delete", verifyUser, async (req, res) => {
  const userId = req.userId;
  const itemId = req.body.itemId;

  try {
    const deleted = await cartModel.findOneAndDelete({ _id: itemId, user: userId });

    if (!deleted) {
      return res.status(404).json({ message: "Item not found or already deleted" });
    }

    res.status(200).json({ message: "Item deleted from database" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Server error while deleting item" });
  }
});




app.post("/logout",function(req,res){

res.clearCookie("token",{
  httpOnly:true,
  sameSite:"Lax",
  secure:false,
});
res.status(200).json({message:"Logout successfull"})


})






const Port=4000;

app.listen(Port,

    console.log(`Server is runnning on ${Port}`)
)

//Yh4oYi574SUrUUP9
//EbNEyTIsgtX3B7su

//Products api
//https://dummyjson.com/products?limit=50
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGY2NGN