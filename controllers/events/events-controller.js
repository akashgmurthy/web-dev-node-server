import events from './events.js'

const EventController = (app) =>{
    app.get('/events',findEvents)
}
const findEvents = (req,res) => {
    res.json(events)
}

export default EventController;