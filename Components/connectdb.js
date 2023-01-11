

const mongoose = require("mongoose")

const uri = "mongodb+srv://thexhacker:rEAKAK3MPKNmmM9g@cluster0.ugev3.mongodb.net/kiit_connect"
export default async function(){
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
        if(err) console.log(err);
        else console.log("Connected to mongodb");
    })
}

