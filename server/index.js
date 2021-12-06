const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const {User} = require("./Controllers/user");
const EventModel = require("./models/event");
const userRoutes = require("./routes/users.js");
const EmailModel = require("./models/email")
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

app.post('/insert2', async(req, res) => {

    const emailSub = req.body.email;

    try{
        const existingEmail = await EmailModel.findOne({ email: emailSub });

        if(existingEmail) {
            return res.status(400).json({
                errors: [
                {
                 msg: "Email already in use",
                },
                ],
            data: null,
            });
        }
        const email = new EmailModel({email: emailSub});
        await email.save();
        res.send("inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get('/read', async(req, res) => {
    
    EventModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.get('/read2', async(req, res) => {
    let params = req.query.id;
    User.find({_id: params}, (err, result) => {
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

app.put('/update4', async(req, res) => {

    const newName = req.body.newName;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.name = newName;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update5', async(req, res) => {

    const newAOI = req.body.newAOI;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.AOI = newAOI;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update6', async(req, res) => {

    const newCDL = req.body.newCDL;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.CDL = newCDL;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update7', async(req, res) => {

    const newSetup = req.body.newSetup;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.Setup = newSetup;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update8', async(req, res) => {

    const newOverEighteen = req.body.newOverEighteen;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.OverEighteen = newOverEighteen;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update9', async(req, res) => {

    const newWeekOne = req.body.newWeekOne;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.WeekOne = newWeekOne;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update10', async(req, res) => {

    const newWeekTwo = req.body.newWeekTwo;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.WeekTwo = newWeekTwo;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update11', async(req, res) => {

    const newWeekThree = req.body.newWeekThree;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.WeekThree = newWeekThree;
           updatedUser.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});
app.put('/update12', async(req, res) => {

    const newWeekFour = req.body.newWeekFour;
    
    const id = req.body.id;

    try{
       await User.findById(id, (err, updatedUser) => {
           updatedUser.WeekFour = newWeekFour;
           updatedUser.save();
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