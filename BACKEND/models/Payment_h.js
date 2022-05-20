const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    pname:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },
    appoinmentType:{
        type:String,
        required:true
    },
    doctorSpecial:{
        type:String,
        required:true
    },
    labtestName:{
        type:String,
        required:true
    },
    pamount:{
        type:Number,
        required:true
    },
    pdate:{
        type:String,
        required:true
    }




});

module.exports = mongoose.model('Payment',paymentSchema)