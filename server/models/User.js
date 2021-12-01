const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    // phone: {
    //     type: String
    // },
    password: {
        type: String,
        required: true,
        min: 5

    },
    id: {
        type: String
    },
    // verified: {
    //     type: Boolean
    // }
}, {timestamps: true})

const user = mongoose.model("User", userSchema)
module.exports = user