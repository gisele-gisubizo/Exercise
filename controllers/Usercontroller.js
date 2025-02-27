import User from "../model/userModel.js";
import bcrypt from "bcryptjs"
import { generateAccessToken } from "../utils/tokenGenerating.js";
export const Register = async (req,res) =>{
    try{
        const {
            userName,
            userEmail,
            userPassword,
            userRole,

        }= req.body;

        //check if the email alredy exists

        const existingUser= await User. findOne({userEmail});
        if(existingUser){
            return res.status (400).json ({message:"Email already exists"});
        }
        //hash the password
        const hashedPassword = await bcrypt.hash(userPassword,10);//10 is the salt rounds
         const user = new User({
            userName,
            userEmail,
            userPassword:hashedPassword,
            userRole,
         });


         user.tokens.accessToken = generateAccessToken(user);
         await user.save();
         res.status(201).json({
            message:"Account created successfull !",
            user:{
                _id:user._id, 
                userName: user.userName,
                userEmail: user.userEmail,
                userRole: user.userRole,
                  tokens:{
                      accessToken:user.tokens.accessToken,
                  }
               }
         });
    }

    catch(error)

{
res
.status(500)
.json({message:"Failed to register user",error: error.message});

}
};


export const Login = async (req,res) => {
    try {
      const { userEmail, userPassword } = req.body;
      const user = await User.findOne({ userEmail });
  
      if (!user) {
        // User not found
        return res.status(404).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(userPassword, user.userPassword);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const accessToken = generateAccessToken(user);
  
  
      user.tokens.accessToken = accessToken;
  
      await user.save();
  
      res.json({
        message: "Login successful!",
        user: {
          _id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          userRole: user.userRole,
          token: {
            accessToken: user.tokens.accessToken,
          },
        },
      });
    
      
    } catch (error) {
      // General error handling
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
