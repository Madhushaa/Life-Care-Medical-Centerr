const express = require('express');
const Appointments = require("../models/appointments_m");
const router = express.Router();


//Add appointments
router.post('/add',async (req,res) => {
        try{
            const{ firstName,lastName,age,gender,nic,country_code,contact_no,doctor,date,time} = req.body;
            const appointments = new Appointments({
                firstName,
                lastName,
                age,
                gender,  
                nic,
                country_code,
                contact_no,
                doctor,             
                date,
                time
             
            });
            await appointments.save();
            res.send('upload successfull');
        }catch(error) {
            res.status(400).send('Error while uploading file..');
        }
    }
);


//view all appintments
router.get(`/view`,(req,res) =>{
    Appointments.find().exec((err,appointments)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAppointments:appointments
        });
    });
});


//view a specific appointment
router.get("/view/:id",(req,res) =>{

    let appointmentId = req.params.id;

    Appointments.findById(appointmentId,(err,appointments) =>{
        if(err){
            return res.status(400).json({sucess:false, err});
        }
        return res.status(200).json({
            success:true,
            appointments
        });
    });
});




//update
router.put(`/update/:id`,(req,res) =>{
    Appointments.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,appointments)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"

            });
        }
    );
});


//delete
router.delete(`/delete/:id`, (req,res) =>{
    Appointments.findByIdAndRemove(req.params.id).exec((err,deletedAppointment)=>{
        if(err) return res.status(400).json({
            message:"Delete error",err
        });
        return res.json({
            message:"Delete Successful",deletedAppointment
        });
    });
});


module.exports = router;
