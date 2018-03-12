"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', auth_1.handleAuthentication);
server.use(router);
var options = {
    cert: fs.readFileSync('backend/keys/cert.pem'),
    key: fs.readFileSync('backend/keys/key.pem')
};
https.createServer(options, server).listen(3003, function () {
    console.log('JSon Server is running on https://localhost:3002');
});
