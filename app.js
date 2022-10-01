const express = require('express')
const mongoose = require('mongoose')

const login = require('./routes/login')
const vehicle = require('./routes/Vehicle')
const register = require('./routes/Register')

const app = express()
const port = 7000

const url = 'mongodb://127.0.0.1/vehicleMobile'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})
app.use(express.json())

app.use('/login', login)
app.use('/vehicle',vehicle)
app.use('/register',register)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})