const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("EventData", EventSchema)
module.exports = Event;