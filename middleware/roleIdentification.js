import User from "../model/userModel.js";

export const admin= (req,res,next) =>{
    if(req.user.userRole !=="admin"){
        return res.status(403).json({message:"Access denied contact Admin Please"})
    }
    next();
};