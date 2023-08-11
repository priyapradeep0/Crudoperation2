const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const employeeData=require("../model/schema")

router.use(express.json());
router.use(express.urlencoded({extended:true}));



function verifytoken(req, res, next) {
    try {
      if (!req.headers.authorization) throw 'Unauthorized';
      const token = req.headers.authorization.split(' ')[1];
      //console.log(token)
      if (!token) throw 'Unauthorized';
      const payload = jwt.verify(token, 'secretKey');
      //console.log(payload)
      if (!payload) throw 'Unauthorized';
      next();
    } catch (error) {
      res.status(401).send('Error');
    }
  }
  

router.post("/addemployee",verifytoken,async (req,res)=>{                              
    try{
        //console.log(req.headers.authorization)
        console.log(req.body);
        const item = req.body;                                               
        const newdata = await employeeData(item);                               
        newdata.save();                                
        res.status(200).json("POST Successful");                                                                             
    }catch(error){
        res.status(400).json("Cannot /POST data");                            
        console.log(`Cannot POST data`);                                      
    }
})

router.put("/editemployee/:id",verifytoken,async (req,res)=>{                               
    try{
        let id = req.params.id;
        let updateData = {$set: req.body};
        const updated = await employeeData.findByIdAndUpdate(id,updateData);  
        res.set('Cache-Control', 'no-store');                            
        res.status(200).json("UPDATE Successful");                                                                          
    }catch(error){
        res.status(400).json("Cannot /UPDATE data");                            
        console.log(`Cannot POST data`);                               
    }
})

router.get("/fetchdata",verifytoken,async (req,res)=>{
    try {
        let data = await employeeData.find({});
        res.set('Cache-Control', 'no-store');
        console.log(data)
        res.json({data:data,status:200}).status(201);
    } catch (error) {
         res.status(400).json({ message: "GET request CANNOT be completed" });       
    }
    
})

router.get("/userform/:id",verifytoken,async (req,res)=>{
    try {
        let id = req.params.id;
        console.log(id)
        let data = await employeeData.findById(id);
        res.json({data:data,status:200}).status(201);
    } catch (error) {
        res.status(400).json({ message: "GET request CANNOT be completed" });       
    }
})

router.delete("/deleteform/:id",verifytoken,async (req,res)=>{
    try {
        let id = req.params.id;
        console.log(id);
        let data = await employeeData.findByIdAndRemove(id);
        res.json({data:data,status:200}).status(201);
    } catch (error) {
        res.status(400).json({ message: "DELETE request CANNOT be completed" });       
    }
})

router.post('/authlogin', (req,res)=>{
    try {
     //   console.log(req.headers.authorization)
        var email = req.body.email;
        var pwd = req.body.password;
        let payload = {email:email,password:pwd}
        console.log(payload)
        let token = jwt.sign(payload,'secretKey');
        if(email==='admin@emp.co.in' && pwd==='Admin123'){
            res.status(200).send({message:'Admin logged in Successful',token:token,api:'/ahome'})
        }else if(email==='user@emp.co.in' && pwd=='User1234'){
            res.status(200).send({message:'User logged in Successfully',token:token,api:'/uhome'})
        }
    } catch (error) {
        res.status(404).send({message:"Fatal Error"})        
    }
})

module.exports = router