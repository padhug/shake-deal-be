var express = require('express');
var router = express.Router();

var services = ['Angular', 'React', 'Node', 'Express', 'MongoDB'];

/* GET services listing. */
router.get('/services', function(req, res, next) {
  res.send(JSON.stringify(services));
});


/* POST service item. */
router.post('/services', function(req, res, next) {
  if(req.body ) {
    services.push(req.body.service);
    //res.send('ok');
    res.send(services);
  }
});
module.exports = router;
