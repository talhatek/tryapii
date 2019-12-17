const Express =require('express');
const run=Express.Router();
const Seq=require('sequelize');
const op=Seq.Op;

const Post =require('../model/Post');

run.get('/postsbody',(req, res, next) => {
    const token=req.headers['authorization'];
    if( token=='easyt'){
        const PostwBody=Post.findAll({ where :{city:{  [op.like] :req.body.city}}})
        .then((posts)=>{
            res.status(200).json({message: posts});
        }).catch((err)=>{
            res.status(500).json({message: err})
        });
    }
    else {
        res.sendStatus(403);
    }
   
});

module.exports = run;