import express from 'express'
import cors from 'cors'
import EventController from './controllers/events/events-controller.js'
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {res.send('Hello World!')})
EventController(app)
app.listen(3000)
