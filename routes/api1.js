// establishes the dependencies
const routingFor = require('express').Router();
const { v4: uuidv3 } = require('uuid');
// requiring node file system
const fs = require ("fs");

// establishes a post request
routingFor.post('/api/notes', (req, res) => {
  const jason = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  // responding dependency
  const respond = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv3(),
  };
  // establishing response
  jason.push(respond);
  fs.writeFileSync("db/db.json",JSON.stringify(jason));
  res.json(jason);
});

// establishes a get request
routingFor.get('/api/notes', async (req, res) => {
  const jason = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(jason);
});