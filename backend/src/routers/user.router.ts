import {Router} from 'express';
import { sample_foods, sample_users } from '../data';
import jwt from 'jsonwebtoken'
import asynHandler from 'express-async-handler'
//import { FoodModels } from '../models/food.model';
import { UserModel } from '../models/user.model';
   const router = Router();
   
   router.get("/seed",asynHandler(
    async (_req,res) => {
      const usersCount = await UserModel.countDocuments();
      if (usersCount>0){
          res.send("seed is already done!");
          return;
      }
       await UserModel.create(sample_users);
       res.send("seed Is Done!");
      }
    ))
   
   
   
   router.post("/login",asynHandler(
     async (req,res) =>{
  
    const{email,password} = req.body;
    const user = await UserModel.findOne({email,password});
  
      if (user){
          res.send(generateTokenResponse(user));
      }
      else{
          res.status(400).send("User name or password is not valid!");
      }
    }
   ))
  
    const generateTokenResponse =(user:any) =>{
     const token = jwt.sign({
      email:user.email,isAdmin:user.isAdmin
     },"SomeRandomText",{
      expiresIn:"30d"
     });
    
    
     user.token = token;
     return user;
  
    }

    export default router;