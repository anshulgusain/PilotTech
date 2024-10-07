const express=require("express")

const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');


const cors = require('cors');
const { UserModel } = require("./Models/UserModel");
const { connection } = require("./Connections/connect");

require('dotenv').config()


const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Base api")
})

// Login and Signup

app.post("/signup",async(req,res)=>{
    const {name,email,mobile,password}=req.body
    // console.log(password)
     bcrypt.hash(password, 5, async function(err, hash) {
       await  UserModel.create({name,email,mobile,password:hash,})
       res.send("Signed up Succesfully")
    });

   
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})
  
    
    if(user){
        const hash=user.password
        // console.log(password)
        bcrypt.compare(password, hash, async function(err, result) {
            // result == true
            
            if(result){
                var token = jwt.sign({ userid:user._id }, 'shhhhh');
               
                res.send({msg:"Logged in Succesfully",token:token})
            }
            else{
                res.send({msg:"Wrong password"})
            }
        });
    }else{
        res.send({msg:"Sign up first"})
    }
  
})


app.get("/user",async (req,res)=>{
const user=await UserModel.find({})
res.send(user)
})



app.listen(8080,async()=>{
    try{
    await connection
    console.log("Listening to port 8080")
    }catch(err){
        console.log(err)
        console.log("Unable to connect")
    }
    })