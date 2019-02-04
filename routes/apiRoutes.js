var db = require("../models");

module.exports = function(app) {
  // Get all teams
  app.get("/api/teams", function(req, res) {
    db.Team.findAll({}).then(function(dbTeams) {
      res.json(dbTeams);
    });
  });

  // Get team by id
  app.get("/api/teams/:id", function(req, res) {
    db.Team.findOne({ where: { id: req.params.id } }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  // Create a new team
  app.post("/api/teams", function(req, res) {
    db.Team.create(req.body).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  // Delete a team by id
  app.delete("/api/teams/:id", function(req, res) {
    db.Team.destroy({ where: { id: req.params.id } }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  // Get all players
  app.get("/api/players", function(req, res) {
    db.Player.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Get team by id
  app.get("/api/games/:id", function(req, res) {
    db.Team.findOne({ where: { id: req.params.id } }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  // Create a new player
  app.post("/api/players", function(req, res) {
    db.Player.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Get team by id
  app.get("/api/players/:id", function(req, res) {
    db.Team.findOne({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Delete a player by id
  app.delete("/api/players/:id", function(req, res) {
    db.Player.destroy({ where: { id: req.params.id } }).then(function(
      dbPlayer
    ) {
      res.json(dbPlayer);
    });
  });

  // Get all games
  app.get("/api/games", function(req, res) {
    db.Game.findAll({}).then(function(dbGames) {
      res.json(dbGames);
    });
  });

  // Get a game by id
  app.get("/api/games/:id", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbGames) {
      res.json(dbGames);
    });
  });

  // Create a new game
  app.post("/api/games", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // Delete a game by id
  app.delete("/api/games/:id", function(req, res) {
    db.Game.destroy({ where: { id: req.params.id } }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
};
