const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
    volunteerName: {
        type: String,
        required: true,
    },
    volunteerAge: {
        type: Number,
        required: true,
    },
});

const Volunteer = mongoose.model("VolunteerData", VolunteerSchema)
module.exports = Volunteer;