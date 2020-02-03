const express = require('express');
const serverless = require('serverless-http')
const Airtable = require('airtable');
/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function(event, context, callback) {
    console.log('at least here is working')
    //pull the required information from your environment variables, which can be set in the Netlify UI
    const {API_URL, API_CLIENT_ID, API_KEY } = process.env;
  
    // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
    const send = body => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
      });
    }
  
    // CONFIGURE YOUR AIRTABLE BASE CONNECTION
    Airtable.configure({
      endpointUrl: API_URL,
      apiKey: API_KEY
    });
    var base = Airtable.base(API_CLIENT_ID);
    
    const data = [];
    
    /**
      AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
      REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
      COMMON CRUD OPERATIONS
    */
   base('Table 1').find('recRswfevsMQarIVS', function(err, record) {
    if (err) { console.error(err);
        console.log('sapoha deu erro'); return; }
    console.log('Retrieved', record.id);
});
  
    send(data);
  }

//const Datastore = require('nedb');
//app.use(express.static('public'));
//const database= new Datastore('database.db');
//database.loadDatabase();

/*const Airtable = require('airtable');
var base = new Airtable({apiKey:'keyFqKmXCtU2IkZGw'}).base('app1ANJMB2FcVdb5o');

base('Table 1').find('recRswfevsMQarIVS', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});



module.exports.handler = serverless(Airtable)*/
console.log('loglog is working');
const app = express();

const router = express.Router();

router.get('/api', (req, res) => {
    res.json({'hello':'hi!'});
});
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app)
