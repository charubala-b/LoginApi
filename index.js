const mongoose= require('mongoose')
const express = require('express')
const {Details,Sales} = require('./schema.js')
const bodyparser=require('body-parser')
const cors = require('cors')

const app=express()
app.use(bodyparser.json())
app.use(cors())
async function connectTodb(){
    try{
        await mongoose.connect('mongodb+srv://charubalab:Charu2004@cluster0.tktmk2c.mongodb.net/Login?retryWrites=true&w=majority&appName=Cluster0')
        console.log("db connection established");
        const port=process.env.PORT || 8000
        app.listen(port,function(){
         console.log(`listening on ${port}....`)
        })
    }
    catch(error){
        console.log(error);
        console.log("couldn't connect to db connection");
    }
}
connectTodb();

//login
app.post('/add-details',async function(request,response){
    try{
    await Details.create({
        "username" : request.body.username,
        "password" : request.body.password
       });
       response.status(200).json({
        "status":"inserted sucessfully"
       });
    }
    catch(error){
        response.status(401).json({
            "error-occurrence":error,
            "status":"not inserted sucessfully"
        });
    }
})

app.get('/get-details',async function(request,response){
    try{
    const logindetails=await Details.find();
    response.status(200).json({
        "total":logindetails
    })
    }
    catch(error){
        response.status(500).json({
            "status":"not sucessfully recieved",
            "error":error
        });
    }
})

//sales
app.post('/add-sales',async function(request,response){
    try{
    await Sales.create({
        "Oname" : request.body.Oname,
        "Address" : request.body.Address,
        "Amount":request.body.Amount,
        "file":request.body.file
       });
       response.status(200).json({
        "status":"inserted sucessfully"
       });
    }
    catch(error){
        response.status(401).json({
            "error-occurrence":error,
            "status":"not inserted sucessfully"
        });
    }
})

app.get('/get-sales',async function(request,response){
    try{
    const saledetails=await Sales.find();
    response.status(200).json({
        "total":saledetails
    })
    }
    catch(error){
        response.status(500).json({
            "status":"not sucessfully recieved",
            "error":error
        });
    }
})



/*
*Expense Tracker

*adding a new expense = "/add-expense"
post : expences user entries

*dispaying existing records = "/get-expense"
get : display entries

*delete an expense = "/delete-expense"
post : entry id

*updating an expense = "/update-expense"
post : both id and entry data
*/

