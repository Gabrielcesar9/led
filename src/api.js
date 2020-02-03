const express = require('express');
const serverless = require('serverless-http')
//const Datastore = require('nedb');
//app.use(express.static('public'));
//const database= new Datastore('database.db');
//database.loadDatabase();

/*var Airtable = require('airtable');
var base = new Airtable({apiKey:'keyFqKmXCtU2IkZGw'}).base('app1ANJMB2FcVdb5o');

base('Table 1').find('recRswfevsMQarIVS', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});*/
console.log('loglog is working');
const app = express();

const router = express.Router();

router.get('/api', (req, res) => {
    res.json({'hello':'hi!'});
});
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
//module.exports.handler = serverless(Airtable);
