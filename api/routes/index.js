const express = require("express");
const people = require('./personRoute');

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
      people
   );
}

module.exports = routes;