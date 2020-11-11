const Forniture = require('../models/model');


async function addForniture(req, res){
    try{
        const data = req.body;
        const forniture = new Forniture(data);

        forniture.save();
        res.status(200).send({status: 'made it! new forniture added'});
    }catch(fail){
        return res.status(500).send({fail});
    };
};

async function getAllForniture(req, res){
    try{
        Forniture.find({}, (fail, result)=>{
            if(fail){
                res.status(404).send({error: 'nothing here'});
            }else{
                res.json(result);
            };
        });
    }catch(fail){
        return res.status(500).send({fail});
    };
};

async function getOneForniture(req, res){
    try{
        const data = req.query;
        console.log(query);
    }catch(fail){
        return res.status(500).send({fail});
    }
};

module.exports = {
    addForniture,
    getAllForniture,
    getOneForniture
};