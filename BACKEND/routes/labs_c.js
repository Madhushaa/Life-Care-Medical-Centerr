const express = require('express');
const labs = require('../models/lab_c');
const router = express.Router();

//save lab

router.post('/save',(req,res)=>{

    let newLab = new labs(req.body);

    newLab.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Lab request added successfully"
        });
    });
});


//get lab

router.get('/labs',(req,res)=>{
    labs.find().exec((err,labs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingLabs:labs
        });
    });
});

//update lab

router.put('/lab/update/:id',(req,res)=>{
    labs.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,lab)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
       
    
});

//delete lab

router.delete('/lab/delete/:id',(req,res)=>{
    labs.findByIdAndRemove(req.params.id).exec((err,deleteLab)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Deleted Successfully"
        });
    });
});


//get specific lab

router.get("/lab/:id",(req,res)=>{
    let labId = req.params.id;

    labs.findById(labId,(err,lab) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            lab
        });
    });
});

module.exports = router;
