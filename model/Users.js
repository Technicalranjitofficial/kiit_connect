const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email:String,
  accessToken:String,
  createdAt:Date,
  profilePic:String,
  verified:Boolean,
  displayName:String,



});
mongoose.models ={};

export default mongoose.model("Users",UserSchema);
 