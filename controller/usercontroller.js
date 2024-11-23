import userModel from "../models/user.js";
export const createAdmin=async (req, res) => {
    try{
        const{name,email,pass}=req.body;
        const user=new userModel({
            name:name,
            email:email,
            pass:pass,
            role:"Admin"
        })
        const save_user = await user.save();
        res.json({
            save_user
        });
    }
    catch(error)
    {
        res.json({
            error:"error occured"
        })
    }
  };

  export const createStudent=async (req, res) => {
    try{
        const{name,email,pass}=req.body;
        const user=new userModel({
            name:name,
            email:email,
            pass:pass,
            role:"Student"
        })
        const save_user = await user.save();
        res.json({
            save_user
        });
    }
    catch(error)
    {
        res.json({
            error:"error occured"
        })
    }
  };
  

  export const createAlumni=async (req, res) => {
    try{
        const{name,email,pass}=req.body;
        const user=new userModel({
            name:name,
            email:email,
            pass:pass,
            role:"Alumni"
        })
        const save_user = await user.save();
        res.json({
            save_user
        });
    }
    catch(error)
    {
        res.json({
            error:"error occured"
        })
    }
  };
  
export const getAllUsers = async(req,res)=>{
    try{
    const getusers =await userModel.find();
    res.json({
        getusers
    });
    }
    catch(error)
    {
       res.json({
        error :"error occured"
       })
    }
}