var express = require('express');
var router = express.Router();

var teams = [{frontend: ['John', 'Peter', 'Bala']},
{backend: ['Priya', 'Someone', 'Someone else']},
{ui: ['Arun', 'Arul']}];

/* GET services listing. */
router.get('/projects', function(req, res, next) {
  res.send(JSON.stringify(teams));
});


/* POST service item. 
router.post('/services', function(req, res, next) {
  if(req.body ) {
    services.push(req.body.service);
    //res.send('ok');
    res.send(services);
  }
}); */
module.exports = router;
