const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // phone: {
    //     type: String
    // },
    password: {
        type: String,
        required: true

    },
    id: {
        type: String
    }
}, {timestamps: true})

const user = mongoose.model("User", userSchema)
module.exports = user