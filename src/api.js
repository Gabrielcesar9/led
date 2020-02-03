const express = require('express');
exports.handler = function(event, context, callback){
    callback(null, {
        statusCode:200,
        body: 'Hello World'
    });
}
const app = express();
const router = express.Router();
app.use('/.netlify/functions/api', router);