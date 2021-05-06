const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
    res.send({name: 'Lukk'})
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})