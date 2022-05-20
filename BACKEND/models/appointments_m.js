const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },
    gender:{
        type:String,
        required:true
    },

    nic:{
        type : String,
        required : true
    },

    country_code : {
        type : String,
        
    },

    contact_no : {
        type : Number,
        required : true
    },
    doctor : {
        type : String,
        required : true
    },

    date:{
        type : String,
        required:true
    },

    time:{
        type : String,
        required:true

    }

})

module.exports = mongoose.model('Appointments',appointmentSchema);

