import {Router} from 'express';
import { sample_foods, sample_users } from '../data';
import jwt from 'jsonwebtoken'
import asynHandler from 'express-async-handler'
import { FoodModels } from '../models/food.model';
import { User, UserModel } from '../models/user.model';
import expressAsyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

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
          res.status(HTTP_BAD_REQUEST).send("User name or password is not valid!");
      }
    }
   ))

   router.post('/register',asynHandler(
    async(req,res) =>{
      const{name,email,password,address} = req.body;
      const user = await UserModel.findOne({email});
      if(user){
        res.status(HTTP_BAD_REQUEST)
        .send('User is already exist,please login!');
         return;
      }
       const encryptedPassword = await bcrypt.hash(password,10);
       const newUser:User = {
         id: '',
         name,
         email: email.tiLowerCase(),
         password: encryptedPassword,
         address,
         isAdmin: false,
         token: ''
       }

      const dbUser = await UserModel.create(newUser);
      res.send(generateTokenResponse(dbUser));
    
    }
   ))
  
    const generateTokenResponse = (user:User) =>{
     const token = jwt.sign({
      id: user.id,email:user.email,isAdmin:user.isAdmin
     },"SomeRandomText",{
      expiresIn:"30d"
     });
    
    
     return{
      id:user.id,
      email: user.email,
      name:user.name,
      address:user.address,
      isAdmin: user.isAdmin,
      token:token
     };
  
    }

    export default router;