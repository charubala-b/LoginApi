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
const Details=mongoose.model('logindetails',loginSchema)

module.exports={Details};

