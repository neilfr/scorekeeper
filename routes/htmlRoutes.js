var db = require("../models");
var path = require("path");

/* app.get("/teamManager", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
*/

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/gameselect", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/gameselect.html"));
  });

  //app.get("/gameselect", function(req, res) {
  //  res.sendFile(path.join(__dirname, "../views/gameselect.html"));
  //});

  app.get("/scorepage", function (req, res) {
    db.Games.findAll({}).then(function (dbGames) {
      res.render("scorepage", {
        games: dbGames
      });
    });
  });

  app.get("/scoreboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/scoreboard.html"));
  });

  app.get("/manage", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/managerpage.html"));
  });

  app.get("/scoretracker", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/scoretracker.html"));
  });

  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/scorekeeper", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/scorekeeper.html"));
  });

  // Load teamManager page
  app.get("/teamManager", function (req, res) {
    db.Teams.findAll({}).then(function (dbTeams) {
      res.render("teamManager", {
        msg: "Welcome!",
        teams: dbTeams
      });
    });
  });

  // Load playerManager page
  app.get("/playerManager", function (req, res) {
    db.Players.findAll({}).then(function (dbPlayers) {
      res.render("playerManager", {
        msg: "Welcome!",
        players: dbPlayers
      });
    });
  });

  // Load gameManager page
  app.get("/gameManager", function (req, res) {
    db.Games.findAll({}).then(function (dbGames) {
      res.render("gameManager", {
        msg: "Welcome!",
        games: dbGames
      });
    });
  });

  // Load gameManager page
  app.get("/gameManager", function (req, res) {
    db.Game.findAll({}).then(function (dbGames) {
      res.render("gameManager");
    });
  });

  // Load gamePicker page
  app.get("/gamePicker", function (req, res) {
    db.Games.findAll({}).then(function (dbGames) {
      res.render("gamePicker", {
        msg: "Welcome!",
        games: dbGames
      });
    });
  });

  app.get("/gamePickerScoreboard", function (req, res) {
    db.Games.findAll({}).then(function (dbGames) {
      res.render("gamePickerScoreboard", {
        msg: "Welcome!",
        games: dbGames
      });
    });
  });

  // Load inGameManager page
  app.get("/inGameManager", function (req, res) {
    db.Games.findAll({}).then(function (dbGames) {
      res.render("inGameManager", {
        msg: "Welcome!",
        games: dbGames
      });
    });
  });

  app.get("/gametracker", function (req, res) {
    res.sendFile(path.join(__dirname, "../gametracker.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};