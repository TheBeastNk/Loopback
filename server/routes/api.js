const express = require('express')
const router =express.Router()

const mongoose = require('mongoose')
const db = "mongodb://TheBeastNk:ABHA1992@ds029911.mlab.com:29911/eventsdata"

mongoose.connect(db , err => {
    if(err){
        console.error('Error!' +err)
    } else {
        console.log('connected to mongodb')
    }
})

router.get('/',(req , res) => {
    res.send('From API route')
})

module.exports = router