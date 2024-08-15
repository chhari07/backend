require('dotenv').config()
const express =require('express');
const app=express()
const port=3001


app.get('/',(req,res)=>{
    res.send("app ka backend start ho gaya h sir ji .")


})


app.get('/tiwtter',(req,res)=>{
    res.send(" yeh apka tiwtter hai sir ji .")


})

app.get('/login',(req,res)=>{
    res.send(`<h1> login karo bhai </h1>`)


})


app.listen(process.env.PORT,()=>{
    console.log(`your is started at port ${port}`)
})