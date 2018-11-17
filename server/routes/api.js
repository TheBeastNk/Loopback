const express = require('express')
const router =express.Router()
const user = require('../models/user')

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

router.post('/register',(req , res) => {
    let userData =req.body
    let user = new user(userData)
    user.save((error , registeredUser) => {
        if(error){
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login' , (req , res ) => {
    let userData = req.body

    user.findOne({email : userData.email} , (error , user) => {
        if(error){
            console.log(error)
        } else {
            if (!user){
                res.status(401).send('Invalid email')
            } else 
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(user)
            }
        }
    })
})

router.get('/events' , (req , res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        }
    ]
    res.json(events)
})

router.get('/special' , (req , res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description" : "lorem ipsum",
            "date" :"2018-11-17"
        }
    ]
    res.json(events)
})

module.exports = router