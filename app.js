const express = require('express')
const app = express()
const port = 3000
const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/students', (request, response) => {
    database('students') //this is a promise
        .then(students => response.send(students))
})

app.get('/students/:id', (request, response) => {
    database('students')
        .where('id', request.params.id)
        .then(student => response.send(student))
})
app.post('/students', (request, response) => {
    const student = request.body

    database('students')
        .insert(student)
        .returning('*')
        .then(student => response.send(student))
})

app.patch('/students/:id', (request, response) => {
    const {student} = request.body
    console.log(request.params.id, student)

    // database('students')
    //     .where('id', student.id)
    //     .update(student)
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})