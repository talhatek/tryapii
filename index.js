const express=require('express');
const bodyParser =require('body-parser');
const server =express();
const posts=require('./routes/posts');
const pwb =require('./routes/postsbody');
const db=require('./config/config');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use((req, res, next)=>{
    //we say what we want to allow, you can whitelist IPs here or domains
    res.header("Access-Control-Allow-Origin", "*"); 
    //what kind of headers we are allowing
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");  

    //check for the options request from browsers
    //this will always be sent
    if(req.method === "OPTIONS"){
        //tell the browser what he can ask for
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        //we just respond with OK status code
        return res.status(200).json({
            "statusMessage": "ok"
        });
    }
   
    next();
});

server.use("/api/", posts);
server.use("/api/", pwb);



server.use((req,res,next)=>{
    const error = new Error("Unable to manage the request");
    //send a status code error
    error.status= 404;
    //forward the request with the error
    next(error);
})

server.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        "error": {
            "message": error.message
        }
    })
});

server.listen(3000, ()=>{
    console.log("The server is running");
})
