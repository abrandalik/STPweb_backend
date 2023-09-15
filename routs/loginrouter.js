const express = require('express')
const res = require('express/lib/response')
const router =express.Router()

router.get('/',(req, res) =>{
    res.status(200).send({
        gaming : "waber"
    })
})

router.post('/',(req,res)=> {
    res.status(200).send("user created")
})

router.get('/:id',(req ,res) => {
    res.status(200).send("get user id " +  req.params.id)
})


module.exports = router