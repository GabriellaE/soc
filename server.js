const path = require('path');
const express = require('express');
const port = (process.env.PORT || 8080);

const app = express();
const buildPath = express.static(path.join(__dirname, 'build'));

app.use('/', buildPath);
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);
console.log('Listening at http://localhost:' + port);
