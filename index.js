#!/usr/bin/node

const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/ogt.js', (req, res) => {
  res.sendFile(__dirname+'/ogt.js');
});

app.get('/canvas.js', (req, res) => {
  res.sendFile(__dirname+'/canvas.js');
});

app.get('/eri_btd.ogt', (req, res) => {
  res.sendFile(__dirname+'/eri_btd.ogt');
});





http.listen(3000, () => {
  console.log('listening on *:3000');
});
