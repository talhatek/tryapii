const Sequelie =require('sequelize');
const db = require('../config/config');

const Records =db.define('employees',{
    id:{
        type:Sequelie.STRING,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true

    },
    gym:{
        type:Sequelie.STRING
        
        

    },
    wifi:{
        type:Sequelie.STRING
    },
    breakfast:{
        type:Sequelie.STRING
    },
    pool:{
        type:Sequelie.STRING
    },
    address:{
        type:Sequelie.STRING
    },
    rent:{
        type:Sequelie.STRING
    },
    city:{
        type:Sequelie.STRING
    },

    pictures:{
        type:Sequelie.JSON
    },

})
module.exports=Records;