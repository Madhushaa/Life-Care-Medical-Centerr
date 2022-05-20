const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    firstName : {
        type : String,
        required: true
    },
    lasttName : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    contactNumber : {
        type : String,
        required: true
    },
    nicNumber : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    dateOfBirth : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    role : {
        type : String,
        required: true
    },
    specialization : {
        type : String,
        required: true
    }
})

const Staff = mongoose.model("Staff",staffSchema);

module.exports = Staff;