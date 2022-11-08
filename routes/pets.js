const express = require('express')
const router = express.Router()

let pets = []

router.get('/', (req, res) => {
    res.send({pets})
})

router.post('/', (req, res) => {
    let pet = req.body
    if (!pet.name || !pet.breed || !pet.age) return res.status(400).send({err:'Data is required!'})
    pets.push(pet)
    res.send({message:'Pet created!', pet, pets})
})

module.exports = router