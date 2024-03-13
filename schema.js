const mongoose = require('mongoose');
const { setThePassword } = require('whatwg-url');

const loginSchema=new mongoose.Schema({
    username:{
        type : String
    },
    password :{
        type: String
    },
})
const saleSchema=new mongoose.Schema({
    Oname:{
        type:String
    },
    Address:{
        type:String
    },
    Amount:{
        type:Number
    },
    file:{
        type:String
    }
})

const Details=mongoose.model('logindetails',loginSchema)

const Sales=mongoose.model('saledetails',saleSchema)

module.exports={Details,Sales};

