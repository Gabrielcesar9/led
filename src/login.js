const express = require('express');
const app = express();
app.all("/", function(req, res, next) {
  req.header("Origin", "*"); // ideally the '*' will be your hostname
  return next();
});
const serverless = require('serverless-http');
exports.handler = function(event, context, callback) {
  console.log('event.body',event.body);
  var entries = JSON.parse(event.body)
  console.log(entries.username)
    response = {
            statusCode: 200,
            body:JSON.stringify({"answer":"body"}),
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }};
            callback(null, response)
    
}