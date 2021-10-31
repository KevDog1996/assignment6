const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let user = {
    username: "KevDog",
    password: "StrongPassword",
    email: "something@aol.com",
    courses: {
        course: {
            classID: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course1: {
            classID: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course2: {
            classID: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },

    }
    
}

app.get("/getUser",(req, res)=>{
    try {
        return res.status(200).json(user);
    } catch{
        return res.status(500);
    }
});

app.post("/addUser",(req, res)=>{
    try {
        console.log(req.body);
        return res.status(200).json("Added user "+req.body.user.username+" Successfully");
    } catch {
        return res.status(500);
    }
});


app.listen(PORT, () =>{
    console.log(`Server Started on Port ${PORT}`);
});