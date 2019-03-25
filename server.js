var express = require("express");
var path = require("path");

var app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log("Server started on port: " + PORT);
});
