const express = require('express')
var heapdump = require('heapdump');
const app = express();
app.get('/', (req, res) => {
   res.send(`<h2>You are at the best place to learn</h2>`);
})
heapdump.writeSnapshot('/' + Date.now() + '.heapsnapshot');
heapdump.writeSnapshot(function (err, filename) {
     console.log('dump written to', filename);
  });
