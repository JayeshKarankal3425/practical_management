import companyModel from "../models/company.js";
export const createCompany=async (req, res) => {
    try{
        const{name,location,industry,email}=req.body;
        const company=new companyModel({
            name,
            location,
            industry,
            email,
        })
        const save_company = await company.save();
        res.json({
            save_company
        });
    }
    catch(error)
    {
        res.json({
            error:"error occured"
        })
    }
  };

  export const getAllCompanies = async(req,res)=>{
    try{
    const getcompanies =await companyModel.find();
    res.json({
        getcompanies
    });
    }
    catch(error)
    {
       res.json({
        error :"error occured"
       })
    }
}