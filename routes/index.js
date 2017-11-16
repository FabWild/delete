var express = require('express');
var router = express.Router();

router.get('/users/:numero(\\d+)', function(req, res, next) {
  res.render('delete-user.pug');
});

router.delete('/users/', function(req, res, next) {
  res.send('No more user with id ' + req.body.userid);
});

router.get('/users/:prenom(\\w+)', function(req, res) {
  res.render('update-user.pug');
});

router.put('/users/', function(req, res) {
  res.send('The new name is ' + req.body.username);
});

// router.put('/maroute', function(req, res) {
//     // modification de la ressource
// });

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session-in', function(req, res, next) {
//  req.session.sessionopened = true;
  req.session.song = "be bop a lula";
  //console.log(req.session);
});

router.get('/session-out', function(req, res, next) {
  req.session.song = "out of here";
  //console.log(req.session);
});
*/
module.exports = router;
