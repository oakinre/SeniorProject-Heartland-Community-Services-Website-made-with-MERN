const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();

const VolunteerModel = require("./models/Volunteer");
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

app.get('/read', async(req, res) => {
    // VolunteerModel.find({$where: {volunteerName: "David"}})
    VolunteerModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.put('/update', async(req, res) => {

    const newVolunteerName = req.body.newVolunteerName;
    const id = req.body.id;

    try{
       await VolunteerModel.findById(id, (err, updatedVolunteer) => {
           updatedVolunteer.volunteerName = newVolunteerName
           updatedVolunteer.save();
           res.send("update")
       })
    } catch(err){
        console.log(err);
    }
});

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
    await VolunteerModel.findByIdAndRemove(id).exec()
    res.send("deleted");
});

// app.listen(3001, ()=> {
//     console.log("Server running on port 3001...");
// });

// app.use('/api', AuthRoute)