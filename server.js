const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


require("./db/index")
const taskRoute = require("./routes/route")

const app = express()
const API_PORT = process.env.BASE_URL
console.log(API_PORT)
const PORT= process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', taskRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))