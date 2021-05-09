const express = require('express')
const app = express()
const port = 3000
const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)


app.get('/students', (req, res) => {
    database('students') //this is a promise
        .then(students => res.send(students))
})

app.post('/students', (req, res) => {
    const student = req.body

    database('students')
        .insert(student)
        .returning('*')
        .then(student => res.send(student))
})

app.patch(`/students:id`, (req, res) => {
    const student = req.body
    database('students')
        .where('id', student.id)
        .update(student)
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})