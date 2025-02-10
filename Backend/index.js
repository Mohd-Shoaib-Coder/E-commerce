const express=require("express");
const cors=require("cors")
const app=express();

app.use(express.json());
app.use(cors());




app.get("/",function(req,res){
    res.send("i am working")
});


app.post("/signup",function(req,res){

const {firstname,lastname,email,number,password,cnfrmpassword}=req.body;


   console.log(req.body)
  
})


const Port=4000;

app.listen(Port,

    console.log(`Server is runnning on port ${Port}`)
)