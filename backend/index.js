const express = require('express')
const mangoose = require('mongoose')
const cors= require('cors')
const { default: mongoose } = require('mongoose')
const FitnezzModel = require('./models/Fitnezz')




const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fitnezz", );
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    FitnezzModel.findOne({email, password})
    .then(user=> {
        if(user){
            if(user.password === password){
                res.json("Login successful")
        }else{
            res.json("Invalid email or password")
        }
    }
    else{
        res.json( "User not found")
    }
    })
})



app.post("/signup", (req, res) => {
   FitnezzModel.create(req.body)
   .then (fitnezz => res.json(fitnezz))
   .catch(err => res.json(err))
   

});

app.listen(5000, () => {
    console.log("Server is running ");
});
