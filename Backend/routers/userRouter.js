const express = require('express');
const router = express.Router();

const Model = require('../models/userModel');

router.post('/authenticate' , (req,res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);
        if(result){
            console.log('login success');
            res.json(result);
        }
        else{
            console.log('login failed');
            res.status(400),json({messsage: 'login failed'});
        }
    })

        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    });

router.post('/add', (req, res) => {

    // console.log(req.body);
    //  to save data in the database
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.json(err);
        
    });

    
});

router.get('/getall',(req, res)=> {

    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.json(err);
        
    });
    
})

router.get('/getbyemail/:email',(req, res) => {
    console.log(req.params.email);
    Model.find({email : req.params.email})
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
        
    });


})

router.get("/getbyusername/:username",(req, res) => {
    console.log(req.params.username);
    Model.findOne({username : req.params.username})
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
        
    });
})


router.get("/getbyid/:userid",(req, res) => {
    console.log(req.params.userid);
    Model.findOne({userid: req.params.userid})
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
        
    });
})





router.delete("/delete/:userid",(req, res) => {
    console.log(req.params.userid)
    Model.findByIdAndDelete( req.params.userid)
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
        
    })
})

module.exports = router;