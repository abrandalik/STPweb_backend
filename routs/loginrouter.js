const express = require('express')
const router =express.Router()

router.get('/',(req, res) =>{
    res.status(200).send({
        gaming : "waber"
    })
})

router.post('/',(req,res)=> {
    res.status(200).send("user created")
})
module.exports = router