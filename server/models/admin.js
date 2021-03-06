const mongoose = require("mongoose");
const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true,
        min: 5

    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    id: {
        type: String
    },

}, {timestamps: true})

const admin= mongoose.model("Admin", adminSchema)
module.exports = admin