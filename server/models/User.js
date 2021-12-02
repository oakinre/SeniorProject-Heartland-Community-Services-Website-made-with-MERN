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
    AOI: {
        type: String,
        required: true
    },
    CDL: {
        type: Boolean,
        required: true
    },
    Setup: {
        type: Boolean,
        required: true
    },
    OverEighteen: {
        type: Boolean,
        required: true
    },
    WeekOne: {
        type: Boolean,
        required:true
    },
    WeekTwo: {
        type: Boolean,
        required:true
    },
    WeekThree: {
        type: Boolean,
        required:true
    },
    WeekFour: {
        type: Boolean,
        required:true
    },
    // verified: {
    //     type: Boolean
    // }
}, {timestamps: true})

const user = mongoose.model("User", userSchema)
module.exports = user