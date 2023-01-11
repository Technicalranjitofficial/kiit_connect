

const passport = require("passport");
import { setCookie } from "cookies-next";
import "../../Components/passports";

export default async function(req,res,next){
    passport.authenticate("google",(err,user,info)=>{
     if(err){
       
       return res.send(err);
     }
     if(!user){ 
       return res.send(info);
    }
    setCookie("token",info.token,{req,res});
    return res.redirect("/dashboard");
  
    
    
    })(req, res, next);
}