const express = require('express');
const Airtable = require('airtable')
Airtable.configure({
    endpointUrl:'http://api.airtable.com',
    apiKey: process.env.API_KEY
})
const base = AIRtable.base('app1ANJMB2FcVdb5o')

exports.handler = function(event, context, callback){
    callback(null, {
        statusCode:200,
        body: (console.log('this is pau'))
    });
}
const app = express();
const router = express.Router();
app.use('/.netlify/functions/api', router);