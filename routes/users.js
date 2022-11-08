const express = require('express')
const router = express.Router()

let users = []

router.get('/', (req, res) => {
    res.send({users})
})

router.post('/', (req, res) => {
    let user = req.body
    if (!user.name || !user.lastname || !user.age) return res.status(400).send({err:'Data is required!'})
    users.push(user)
    res.send({message:'User created!', user, users})
})

module.exports = router