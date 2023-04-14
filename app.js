import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import EventController from './controllers/events/events-controller.js'
import UsersController from "./controllers/users/users-controller.js";
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {res.send('Hello World!')})

const RHYTHM_LOUNGE_DB_CONNECTION_STRING = process.env.RHYTHM_LOUNGE_DB_CONNECTION_STRING
    || "mongodb+srv://rhythm-lounge-admin:JnBEnX1uOlH34tOC@rhythm-lounge.8ugc16w.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(RHYTHM_LOUNGE_DB_CONNECTION_STRING)

EventController(app)
UsersController(app)
app.listen(3000)
