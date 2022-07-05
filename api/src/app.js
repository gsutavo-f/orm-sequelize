const express = require('express');
const routes = require('../routes');

const app = express();
routes(app);

app.get('/test', (req, res) => {
   res.status(200).send({message: ";)"});
});

module.exports = app;