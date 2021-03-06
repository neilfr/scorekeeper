//scoretracker.js
var gamePicked = sessionStorage.getItem("gamePicked");

var socket = io(
  window.location.protocol +
    "//" +
    window.location.host +
    "?gameId=" +
    gamePicked
);

initialize();

socket.on("goalEvent" + gamePicked, function() {
  $.get("/api/games/" + gamePicked).then(function(data) {
    console.log("data received is:");
    console.log(data);
    refreshGoalInfo(data);
  });
});

socket.on("timerEvent" + gamePicked, function(timeRemaining) {
  $("#gameTime").html("Time Remaining: " + timeRemaining);
});

function gameTime(timeRemaining) {
  var gameMinutes = Math.floor(timeRemaining / 600);
  var gameSeconds = Math.floor((timeRemaining - gameMinutes * 600) / 10);
  var game10ths = Math.floor(
    timeRemaining - (gameMinutes * 600 + gameSeconds * 10)
  );
  if (gameMinutes < 10) {
    gameMinutes = "0" + gameMinutes;
  }
  if (gameSeconds < 10) {
    gameSeconds = "0" + gameSeconds;
  }
  return gameMinutes + ":" + gameSeconds + ":" + game10ths;
}

function refreshGoalInfo(data) {
  var homeScore = 0;
  var visitorScore = 0;
  var homeTeamID = data.HomeTeam.id;
  var homeTeamName = data.HomeTeam.teamName;
  var visitorTeamName = data.VisitorTeam.teamName;
  var $goalTable = $("#goalTable");

  // clear the old goalTable, loop through the goal data for the game and
  // 1. build a table row for each goal and append to the goal table
  // 2. increment counters for each goal their team scored

  $goalTable.html("");
  for (i = 0; i < data.Goals.length; i++) {
    var $tr = $("<tr>");
    if (data.Goals[i].TeamId === homeTeamID) {
      $tr.append("<td>" + homeTeamName + "</td>");
    } else {
      $tr.append("<td>" + visitorTeamName + "</td>");
    }
    $tr.append("<td>" + data.Goals[i].Player.lastName + "</td>");
    $tr.append("<td>" + data.Goals[i].Player.jerseyNumber + "</td>");
    $tr.append("<td>" + gameTime(data.Goals[i].timeRemaining) + "</td>");
    $goalTable.append($tr);
    if (data.Goals[i].TeamId === homeTeamID) {
      homeScore++;
    } else {
      visitorScore++;
    }
  }
  $("#homeScore").html(homeTeamName + ": " + homeScore);
  $("#visitorScore").html(visitorTeamName + ": " + visitorScore);
}

function initialize() {
  $.get("/api/games/" + gamePicked).then(function(data) {
    console.log("data received is:");
    console.log(data);
    refreshGoalInfo(data);
  });
}
