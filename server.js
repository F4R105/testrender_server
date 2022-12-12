const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/',(req,res)=>{
    res.send('You are on testrender server')
})

app.listen(3005,()=>console.log('Server is listening on port 3005'))