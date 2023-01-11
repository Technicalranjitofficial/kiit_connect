const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const { default: Users } = require('../model/Users');
const { default: connectDB } = require('./connectdb');
const jwt = require("jsonwebtoken");
const { default: async } = require('../pages/oauth2/redirect/google');


passport.use(new GoogleStrategy({
    clientID:'654893194221-e9ptiasj6skd0o4r8kdge07t3k352n91.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/api/redirect',
    
},async(accessToken,refreshToken,profile,done)=>{
    try {
      await connectDB();
      if(!profile){
       return done(null,null,{message:"Not Authenticated"});
        
      }
        const emailId =await profile.emails[0];
        var validate;
       if(emailId){
        const index = emailId.value.indexOf("@");
         validate  = emailId.value.slice(index);
       }
       if(validate!=="@kiit.ac.in"){
          return done(null,null,{message:"Please signin with kiit mail id only;"});
       }

       console.log("this executed");

        const user =await Users.findOne({email:emailId.value});
        const pic = await profile.photos[0];
        if(!user){
            Users.create({
                email:emailId.value,
                verified:false,
                accessToken:accessToken,
                displayName:profile.displayName,
                profilePic:pic.value,
            }).then(async(users)=>{
                const u = {
                    id:users._id,
                    createdDate:users.createdAt,
                };
                const token =  jwt.sign(u,"Ranjit");
              return  done(null,users,{message:"Signup Sucessfully",token,profile});
            }).catch((err)=>{
                console.log(err);
              return  done(err,null,{message:"something went wrong!"});
            })
        }else{
            console.log("userl",user);
            const token = jwt.sign({id:user._id,createdDate:user.createdAt},"Ranjit");
            return done(null,user,{message:"Auth Sucessfull",token,profile});
        }
   } catch (error) {
    console.log(error)
    return done(error,null,{message:"Internal Server Error!"});
   }

}))



