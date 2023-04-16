import express from 'express'
import cors from 'cors'
import EventController from './controllers/events/events-controller.js'
import mongoose from "mongoose";

const CONNECTION_STRING = 'mongodb+srv://akashgmurthy:ikAYtNs288j2859T@cluster0.t3yfh5o.mongodb.net/rhythm-lounge?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING || 'mongodb://127.0.0.1:27017/rhythm-lounge');
const app = express()



app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {res.send('Hello World!')})
EventController(app)
app.listen(3000)
