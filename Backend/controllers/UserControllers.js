const Users  = require("../models/Usermodels")
const UserValidation  = async(req,res)=>{
    const {name,password} = req.body;
    try{
        const finder = await Users.findOne({name})
        if(name)
            {
                if(finder && password == finder.password){
                    res.status(200).json({message:`User found`});
                    res.status(200).send("Login successfull");
                }
            }
            else{
                res.status(404).json({message:"users not found"})
            }
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
    
}
const RegisterUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try{
        const existingUser = await Users.findOne({email})
        if(existingUser)
            {
                res.status(400).json({message:"User already Found"})
            }
            else{
                const new_user = new Users({
                    name,
                    password,
                    email
                })
                new_user.save();
                res.status(200).json({message:"USer registered Successfully"})
            }
        }
        catch(err)
        {
            res.status(404).json({message:"Internal server Error try again later"});
        }
}

module.exports = {RegisterUser,UserValidation}
