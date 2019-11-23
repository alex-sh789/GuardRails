const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bp = require('body-parser'),
    mongoose = require('mongoose'),
    Report = require('./api/models/reportsModel'),
    cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/ReportsDb');

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(cors());

const routes = require('./api/routes/reportsRoutes');

routes(app);

app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port)

console.log(`API initialized on port ${port}`)
