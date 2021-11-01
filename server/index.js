const express = require("express");
const mongoose = require("mongoose");
const app = express()

const VolunteerModel = require("./models/Volunteer");

app.use(express.json());

mongoose.connect("mongodb+srv://newuser:HCSproj2@hcs.xkws2.mongodb.net/volunteer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.get('/', async(req, res) => {
    const volunteer = new VolunteerModel({volunteerName: "David", volunteerAge: 22});

    try{
        await volunteer.save();
        res.send("inserted data");
    } catch(err){
        console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log("Server running on port 3001...");
});