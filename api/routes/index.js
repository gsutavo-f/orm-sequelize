const express = require("express");
const people = require('./personRoutes.js');
const levels = require('./levelRoutes.js');
const classes = require('./classRoutes.js');

function routes(app) {
   app.route('/').get((req, res) => {
      res.status(200).send(
         {
            title: "This is your server :)"
         }
      );
   });

   app.use(
      express.json(),
      people,
      levels,
      classes
   );
}

module.exports = routes;