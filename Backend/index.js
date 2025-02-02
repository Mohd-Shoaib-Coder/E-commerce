const express=require("express");

const app=express();

app.get("/",function(req,res){
    res.send("i am working")
});

const Port=4000;

app.listen(Port,

    console.log(`Server is runnning on port ${Port}`)
)