const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "All Feilds are Required"]
    },
    description: {
        type: String, 
        required: [true, "All Feilds are Required"]
    },
    price: {
        type: Number, 
        required: [true, "All Feilds are Required"]
    }, 
    quantity: {
        type: Number, 
        required: [true, "All Feilds are Required"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Form", formSchema)