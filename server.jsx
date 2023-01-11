// const next = require("next");
const next= require("next");
const express = require("express");

const dev = process.env.NODE_ENV !=="production";
const app = next({dev})

app.prepare().then(()=>{
    const server = express();

    server.get("/",(res,req)=>{
        res.json({sucess:true});
    });


    server.listen(5000,()=>{
        console.log("Server is listening on 5000");
    })

})