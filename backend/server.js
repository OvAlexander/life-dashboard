//Note use nodemon to update on save or use npm run dev
//Note turn off VPN when using db
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const tasksRoutes = require("./routes/tasks");

//Envoke express app
const app = express();

//middleware function will alway be used everytime we get a request and log it in the console
app.use(express.json()) //alllows us to access req

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route handller
// app.get('/', (req, res) => {
//     res.json({msg: 'Welcome to the app'})
// })
app.use("/api/tasks", tasksRoutes);

//Connect to db
mongoose.connect(process.env.MONG_URI) //async
    .then(()=> {    //Only run when conncected to database
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("conntected to db and listening on port", process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log(error)
        return
    })
//allow the use of .env file
process.env;
