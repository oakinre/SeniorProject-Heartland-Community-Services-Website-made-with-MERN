const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();

const VolunteerModel = require("./models/Volunteer");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://newuser:HCSproj2@hcs.xkws2.mongodb.net/volunteer?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);


app.post('/insert', async(req, res) => {

    const volunteerName = req.body.volunteerName
    const ages = req.body.ages

    const volunteer = new VolunteerModel({volunteerName: volunteerName, volunteerAge: ages});

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