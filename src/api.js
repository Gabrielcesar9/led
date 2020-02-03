const express = require('express');
const Airtable = require('airtable')
Airtable.configure({
    endpointUrl:'http://api.airtable.com',
    apiKey: process.env.API_KEY
})
const base = Airtable.base('app1ANJMB2FcVdb5o')


exports.handler = function(event, context, callback){
    const allRecords = []
    base('Table 1').find('recRswfevsMQarIVS', function(err, record) {
        allRecords.push(record)
        }
    )

    callback(null, {
        statusCode:200,
        body: (JSON.stringify({records:allRecords}))
    });
}
const app = express();
const router = express.Router();
app.use('/.netlify/functions/api', router);