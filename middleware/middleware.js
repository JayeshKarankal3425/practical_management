import userModel from "../models/user.js"
export const isAdmin = async(req,res,next)=>{
   try{
        const {email}=req.body;
        const userInfo = await userModel.findOne({email})
        if(userInfo && userInfo.role=="Admin"){
            next();
        }
        else{
            res.status(403).json({
                message:"Access Denied, only admin can access this "
            })
        }
   }
   catch(error)
   {
     res.status(500).json({message:"Internal server error..."})
   }
}

export const isStudent = async(req,res,next)=>{
    try{
         const {email}=req.body;
         const userInfo = await userModel.findOne({email})
         if(userInfo && userInfo.role=="Student"){
             next();
         }
         else{
             res.status(403).json({
                 message:"Access Denied, only Student can like the review "
             })
         }
    }
    catch(error)
    {
      res.status(500).json({message:"Internal server error..."})
    }
 }

 export const  isAlumni = async(req,res,next)=>{
    try{
         const {email}=req.body;
         const userInfo = await userModel.findOne({email})
         if(userInfo && userInfo.role=="Alumni"){
             next();
         }
         else{
             res.status(403).json({
                 message:"Access Denied, only Alumni can Post review "
             })
         }
    }
    catch(error)
    {
      res.status(500).json({message:"Internal server error..."})
    }
 }