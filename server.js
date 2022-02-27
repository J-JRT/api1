'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var cadao = JSON.parse(fs.readFileSync("./cadao.json","utf-8"));
var gai = JSON.parse(fs.readFileSync("./gai.json","utf-8"));
var gaisexy = JSON.parse(fs.readFileSync("./gaisexy.json","utf-8"));
var gaiditbu = JSON.parse(fs.readFileSync("./gaiditbu.json","utf-8"));
var gaivuto = JSON.parse(fs.readFileSync("./gaivuto.json","utf-8"));
var vdsex = JSON.parse(fs.readFileSync("./vdsex.json","utf-8"));
var kiss = JSON.parse(fs.readFileSync("./kiss.json","utf-8"));
var hentai = JSON.parse(fs.readFileSync("./hentai.json","utf-8"));
var punch = JSON.parse(fs.readFileSync("./punch.json","utf-8"));
var cosplay = JSON.parse(fs.readFileSync("./cosplay.json","utf-8"));
var poem = JSON.parse(fs.readFileSync("./poem.json","utf-8"));
var spar = JSON.parse(fs.readFileSync("./spar.json","utf-8"));
var trai = JSON.parse(fs.readFileSync("./trai.json","utf-8"));
var gaixinhtik = JSON.parse(fs.readFileSync("./gaixinhtik.json","utf-8"));
var slap = JSON.parse(fs.readFileSync("./slap.json","utf-8"));
var meme = JSON.parse(fs.readFileSync("./meme.json","utf-8"));
app.set("port", process.env.PORT || 4000);
var author = "Kaneki"
// app.get('/', function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    var response = `LIST API:\n• https://educatez.github.io/meme\nAPI meme việt\n• https://educatez.github.io/cosplay\nAPI ảnh cosplay\n• https://educatez.github.io/lyrics/title/artist\nAPI lời bài hát\n• https://educatez.github.io/cadao\nAPI ca dao\n• https://educatez.github.io/avatar/id=\nAPI lấy avatar Facebook không cần token\n• https://educatez.github.io/duckbo\nAPI ảnh Trần Đức Bo\n• https://educatez.github.io/jimmy\nAPI ảnh Jimmy Nguyễn\n• https://educatez.github.io/sim/[text]\nAPI simsimi Tiếng Việt\n• https://educatez.github.io/simteach/[hoi]/[dap]\nAPI dạy simsimi nói\n• https://educatez.github.io//gai\nAPI ảnh gái\n• https://educatez.github.io/trai\nAPI ảnh trai\n\n\n${author}\n\n\n${contact}`
//    console.log('/',req.ip);
//    res.end(response);
// })
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/cadao/', async function (req, res) {
  var lenght = Number(cadao.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var cadaorq = await cadao.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${cadaorq}`,"author":`${author}`}
   console.log('/cadao',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gai/', async function (req, res) {
  var lenght = Number(gai.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var baby = await gai.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${baby}`,"author":`${author}`}
   console.log('/gai',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gaisexy/', async function (req, res) {
  var lenght = Number(gaisexy.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var aa = await gaisexy.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${aa}`,"author":`${author}`}
   console.log('/gaisexy',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gaiditbu/', async function (req, res) {
  var lenght = Number(gaiditbu.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var cc = await gaiditbu.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${cc}`,"author":`${author}`}
   console.log('/gaiditbu',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gaivuto/', async function (req, res) {
  var lenght = Number(gaivuto.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var dd = await gaivuto.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${dd}`,"author":`${author}`}
   console.log('/gaivuto',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/vdsex/', async function (req, res) {
  var lenght = Number(vdsex.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var ee = await vdsex.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${ee}`,"author":`${author}`}
   console.log('/vdsex',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/kiss/', async function (req, res) {
  var lenght = Number(kiss.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var ff = await kiss.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"url": `${ff}`,"author":`${author}`}
   console.log('/kiss',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/hentai/', async function (req, res) {
  var lenght = Number(hentai.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var bb = await hentai.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${bb}`,"author":`${author}`}
   console.log('/hentai',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/punch/', async function (req, res) {
  var lenght = Number(punch.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var đấm = await punch.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"url": `${đấm}`,"author":`${author}`}
   console.log('/punch',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/cosplay/', async function (req, res) {
  var lenght = Number(cosplay.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var cosplaygame = await cosplay.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${cosplaygame}`,"author":`${author}`}
   console.log('/cosplay',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/poem/', async function (req, res) {
  var lenght = Number(poem.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var thinh = await poem.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${thinh}`,"author":`${author}`}
   console.log('/poem',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/spar/', async function (req, res) {
  var lenght = Number(spar.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var da = await spar.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"url": `${da}`,"author":`${author}`}
   console.log('/spar',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/trai/', async function (req, res) {
  var lenght = Number(trai.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var boy = await trai.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${boy}`,"author":`${author}`}
   console.log('/trai',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gaixinhtik/', async function (req, res) {
  var lenght = Number(gaixinhtik.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var aa = await gaixinhtik.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${aa}`,"author":`${author}`}
   console.log('/gaixinhtik',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/slap/', async function (req, res) {
  var lenght = Number(slap.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var tát = await slap.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"url": `${tát}`,"author":`${author}`}
   console.log('/slap',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/meme/', async function (req, res) {
  var lenght = Number(meme.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var anhche = await meme.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${anhche}`,"author":`${author}`}
   console.log('/meme',req.ip)
   res.end(JSON.stringify(response));
})
var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)
})
