const express = require('express')
const usersRouter = require('./routes/users')
const petsRouter = require('./routes/pets')

const app = express()

const server = app.listen(8080, () => console.log('Server Up'))

app.use(express.json())

app.use('/content', express.static('public'))

app.use('/users', usersRouter)
app.use('/pets', petsRouter)