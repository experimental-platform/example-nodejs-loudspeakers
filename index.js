var express = require('express')
var app = express()
var exec = require("child_process").exec;

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

function play(fileName) {
  exec("mplayer ./sounds/" + fileName, function(error, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
  });
}

app.post("/play", function(request, response) {
  var sound = (request.query.sound || "").replace(/[^a-z0-9_\-]/gi, "");
  play(sound + ".mp3");
  response.send("ok.")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
