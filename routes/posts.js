const Express =require('express');
const run=Express.Router();

const Post =require('../model/Post');

run.get("/posts", (req, res, next) => {
    const newPost = Post.findAll()
    .then((posts)=>{
        res.status(200).json({message: posts});
    }).catch((err)=>{
        res.status(500).json({message: err})
    });
    
   
});

module.exports = run;