import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export default (req: any, res: any, next:any) =>{
    const token = req.body.name as string;
    console.log(token);
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();

  try{
    const decodedUser = req.name;
    // verify(token, process.env.JWT_SECRET!);
    req.name = decodedUser;
  } catch (error) {
      console.log("from here");
     res.status(HTTP_UNAUTHORIZED).send();

  }

   return next();
  

}