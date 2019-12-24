const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Skills = require('./model/skills');

const db = 'mongodb://localhost:27017/khurshed';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(!error) {
        console.log('success 😀')
    } else {
        console.log('error 😥')
    }
});

const services = [
    {
        'id' : 1,
        'name': 'services 1'
    },
    {
        'id' : 2,
        'name': 'services 2'
    }
];

router.get('/services', (req, res) => {
    res.send(services);
});

router.get('/data', (req , res) => {
    let data = require('./src/assets/data.json');
    res.send(data);
})

// skills api

router.get('/skills', (req, res) => {
    Skills.find().exec((err, skill)=> {
        if(err){
            res.send('error')
        }else {
            res.json(skill)
        }
    })
})

module.exports = router;