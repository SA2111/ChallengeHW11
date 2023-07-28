
// dependency for sending the route
const routingFor = require('express').Router();
const path = require('path');

// route for index return
routingFor.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// route for notes return
routingFor.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

