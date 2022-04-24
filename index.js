const http =require('http');
const express = require('express');
const app =express();
app.config={prot:3000};
 

app.use((req, res, next)=>{
next(
    'Requested url not found');
})

app.use((err,req,res,next)=>{
        if(err.message){
            res.status(500).send(err.message);
        }else{
            res.status(500).send('There was an error');
        }
})


app.listen(app.config.prot,()=>{
        console.log(`port number ${app.config.prot}`);
})