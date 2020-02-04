const express = require('express');
const serverless = require('serverless-http');
const Airtable = require('airtable')
/*Airtable.configure({
    endpointUrl:'http://api.airtable.com',
    apiKey: 'keyFqKmXCtU2IkZGw'
})
const base = Airtable.base('app1ANJMB2FcVdb5o')
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyFqKmXCtU2IkZGw'}).base('app1ANJMB2FcVdb5o');*/

exports.handler = function(event, context, callback) {
    const {API_URL, API_CLIENT_ID, API_KEY } = process.env;
    Airtable.configure({
    endpointUrl:API_URL,
    apiKey: API_KEY
})
    var base = Airtable.base(API_CLIENT_ID);
    const allRecords = []
    base('Table 1')
    .select({
      maxRecords: 100,
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          callback(err)
        } else {
          const body = JSON.stringify({ records: allRecords })
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }
          }
          callback(null, response)
        }
      }
    )
      
  }
const app = express();

const router = express.Router();
app.use('/.netlify/functions/api', router);

