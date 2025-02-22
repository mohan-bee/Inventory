// name price description quantity
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const Form = require('./formModel')
const cors = require('cors')

mongoose.connect('mongodb+srv://mohn08052006:mohn11w1@cluster0.0e1zd.mongodb.net/form')
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err))

app.use(cors())
app.use(express.json())

app.post('/create', async(req,res) => {
    try {
        const {name, description, price, quantity} = req.body
        const newForm = new Form({name, description, price, quantity})
        await newForm.save()
        res.status(200).json({message: "Form Created Successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.get('/forms', async(req,res) => {
    try {
        const forms = await Form.find()
        res.status(200).json({message: "Form Found Successfully", forms})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(process.env.PORT,()=> console.log("Server is Running...") )