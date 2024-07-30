const express = require('express')
const app = express()
require('dotenv').config()

//Router
//GET :http://localhost:3000/
app.get('/', (req, res) => {
    return res.send('Home page')
})

//Get :http://localhost:3000/user
app.get('/users', (req, res) => {
    const name = "Mr.Jhon Doe"
    const age = 25

   return res.json({
        message: name,
        data: age
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`SERVER running at http://localhost:${PORT}`)
})