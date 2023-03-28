require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const path = require('path');

// setup express
const app = express();
app.use(cors());
app.use('/api', createProxyMiddleware({
    target: process.env.DOMAIN || "localhost",
    changeOrigin: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup app
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.set('secretKey', process.env.SECRET_KEY || 'ms-app-api@2023');

// setup api as /v1
app.use('/v1/api', require('./routes/api'));

// setup web site
const siteApp = path.join(__dirname, 'client/build');
app.use('/', express.static(siteApp, { index: 'index.html '}));
app.get(['/', '/*'], function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//process.setMaxListeners(100);

const PORT = app.get('port');
const HOST = app.get('host');
app.listen(PORT, function () {
    console.log('Web & API is running on port: %s - host: %s by nodejs version: %s', PORT, HOST, process.version);
});