const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Hey!");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000 ");
});
