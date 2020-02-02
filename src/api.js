const express = require('express');
const serverless = require('serverless-http')
const Datastore = require('nedb');
app.use(express.static('public'));
const database= newDatastore('database.db');
database.loadDatabase();

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({'hello':'hi!'});
});
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
