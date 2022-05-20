const express = require('express');
const Payments =  require('../models/Payment_h');

const router = express.Router();

// Save payments 

router.post('/payadd',(req,res)=>{

    let newPayment = new Payments(req.body);

    newPayment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Payments saved sucessfully"
        });
    });
});

//get payments 

router.get('/viewpayment',(req,res)=>{
    Payments.find().exec((err,Payments)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Payments
        });
    });
});

//update method for payments
router.put('/payUpdate/:id',(req,res)=>{
    Payments.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Payments)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully "
            });
        }
    );
});

//Delete payments

router.delete('/paydelete/:id',(req,res)=>{
    Payments.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{
        if(err) return res.status(400).json({
            message:"Deletion Entered Payment Details Unsuccesfull ",err
        });
        return res.json({
            message:"Delete Payment Details Successfully ",deletePost
        });
    });
});

//view unique payment


router.get("/viewpayment/:id",(req,res)=>{
    let paymentId = req.params.id;

    Payments.findById(paymentId,(err,payment)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            payment
        });
    });
});


module.exports = router;