var db = require("../models");

module.exports = function(app) {
  app.get("/api/games", function(req, res) {
    db.Games.findAll({
      include: [
        {
          model: db.Goals,
          include: [db.Players]
        },
        // {
        //   model: db.Penalties,
        //   include: [db.Players]
        // },
        {
          model: db.Teams,
          as: "HomeTeam" // specifies how we want to be able to access our joined rows on the returned data
        },
        {
          model: db.Teams,
          as: "VisitorTeam" // specifies how we want to be able to access our joined rows on the returned data
        }
      ]
    }).then(function(dbGames) {
      res.json(dbGames);
    });
  });

  //,

  app.get("/api/games/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Games.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Goals, db.Penalties]
    }).then(function(dbGames) {
      res.json(dbGames);
    });
  });
};
