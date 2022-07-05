const express = require("express");

function routes(app) {
   app.route('/').get((req, res) => {
      res.status(200).send(
         {
            title: "This is your server :)"
         }
      );
   });

   app.use(express.json());
}

module.exports = routes;