const mongoose = require('mongoose');
const FitnezzSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    age: Number,
    weight: Number,
    height: Number,
    goal: String,
});
const FitnezzModel = mongoose.model("fitnezz", FitnezzSchema);
module.exports = FitnezzModel