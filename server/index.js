const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const EventModel = require("./models/event");
const AuthRoute = require("./routes/auth");
const userRoutes = require("./routes/users.js");


app.use(express.json());
app.use(cors());
app.use('/user', userRoutes);

const CONNECTION_URL ='mongodb+srv://newuser:HCSProj1@hcs.xkws2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


mongoose.connect(
    "mongodb+srv://newuser:HCSProj1@hcs.xkws2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);


app.post('/insert', async(req, res) => {

    const eventName = req.body.eventName;
    const date = req.body.date;
    const time = req.body.time;

    const event = new EventModel({eventName: eventName, eventDate: date, eventTime: time});

    try{
        await event.save();
        res.send("inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get('/read', async(req, res) => {
    // VolunteerModel.find({$where: {volunteerName: "David"}})
    EventModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.put('/update1', async(req, res) => {

    const newEventName = req.body.newEventName;
    const id = req.body.id;

    try{
       await EventModel.findById(id, (err, updatedEvent) => {
           updatedEvent.eventName = newEventName
           updatedEvent.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update2', async(req, res) => {

    const newEventDate = req.body.newEventDate;
    const id = req.body.id;

    try{
       await EventModel.findById(id, (err, updatedEvent) => {
           updatedEvent.eventDate = newEventDate
           updatedEvent.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update3', async(req, res) => {

    const newEventTime = req.body.newEventTime;
    const id = req.body.id;

    try{
       await EventModel.findById(id, (err, updatedEvent) => {
           updatedEvent.eventTime = newEventTime;
           updatedEvent.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
    await EventModel.findByIdAndRemove(id).exec()
    res.send("deleted");
});

// app.listen(3001, ()=> {
//     console.log("Server running on port 3001...");
// });

// app.use('/api', AuthRoute)