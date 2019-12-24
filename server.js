const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./api');

app.use('/api', api);

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.use(express.static('dist'));

app.get('*', (req, res) =>res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));