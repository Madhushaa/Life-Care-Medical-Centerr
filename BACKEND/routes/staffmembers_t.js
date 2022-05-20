const router = require("express").Router();
let Staff = require("../models/staff_t.js");


router.route("/add").post((req,res)=>{

    //body
    const firstName = req.body.firstName;
    const lasttName = req.body.lasttName;
    const address = req.body.address;
    const contactNumber = (req.body.contactNumber);
    const nicNumber = (req.body.nicNumber);
    const email = req.body.email;
    const dateOfBirth = (req.body.dateOfBirth);
    const gender = req.body.gender;
    const role = req.body.role;
    const specialization = req.body.specialization;

    const newStaff = new Staff({
        firstName,
        lasttName,
        address,
        contactNumber,
        nicNumber,
        email,
        dateOfBirth,
        gender,
        role,
        specialization 

    })

    // console.log(newStaff)
     
    newStaff.save().then(()=>{
        res.json("Staff Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view").get((req,res)=>{
    //body
    Staff.find().then((staff)=>{
        res.json(staff)

    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {firstName, lasttName, address, contactNumber, nicNumber, email, dateOfBirth, gender, role, specialization}=req.body;

    const updatestaff = {
        firstName,
        lasttName,
        address,
        contactNumber,
        nicNumber,
        email,
        dateOfBirth,
        gender,
        role,
        specialization 
    }
    const update = await Staff.findByIdAndUpdate(userId,updatestaff)
    .then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log((err));
        res.status(500).send({status:"Error with update data", error: err.message});

    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;
    
    await Staff.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({status: "error with delete user", error:err.message});
    })

})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Staff.findById(userId)
    .then((staff)=>{
        res.status(200).send({status: "user fetched", staff})
    }).catch((err)=>{
        console.log(err.message);
        req.status(500).send({status: "error with get user", error:err.message});
    })
})

module.exports = router;