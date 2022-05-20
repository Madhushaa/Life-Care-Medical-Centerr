const mongoose = require('mongoose')
const labSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    id:{
        type:Number,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    labTest:{
        type:String,
        required:true
    },

    labNo:{
        type:Number,
        required:true
    },

    technologist:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('labs',labSchema);