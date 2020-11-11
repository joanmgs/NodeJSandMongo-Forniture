const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
//Variable de entorno
const env = require('./env');
//Controller (functions)
const fornitureController = require('./controller/controller');
//Parsea el body
server.use(bodyParser.json());
//atrapa errores generales
server.use((fail, req, res, next)=>{
    if(fail){
        res.status(500).send({Error: "something went wrong"});
    }else{
        next();
    };
});

//routes
server.post('/forniture', fornitureController.addForniture);
server.get('/forniture', fornitureController.getAllForniture);
server.get('/forniture/:id', fornitureController.getOneForniture);


mongoose.connect(env.mongoUrl, (fail, res)=>{
    if(fail) return;
    server.listen(3000, ()=>{
        console.log('Check and ready!');
    });
});