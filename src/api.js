const express = require('express');
const Airtable = require('airtable')
Airtable.configure({
    endpointUrl:'http://api.airtable.com',
    apiKey: process.env.API_KEY
})
const base = Airtable.base('app1ANJMB2FcVdb5o')


exports.handler = function(event, context, callback){
    const allRecords = []
    base('Table 1')
    .select({
      maxRecords: 100,
      view: 'all'
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