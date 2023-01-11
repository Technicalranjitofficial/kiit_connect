import '../../Components/passports';
const passport = require("passport");
import nextConnect from "next-connect"
import connectdb from '../../Components/connectdb';
// import async from '../oauth2/redirect/google';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// require('../../Components/passports');

export default async function(req,res,next){
    await connectdb();
    passport.authenticate("google",{
        scope:['profile','email'],
        session:false,
    })(req,res,next);
}