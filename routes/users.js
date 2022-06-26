var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/me', (req, res) => {
  res.send('this me!')
})

module.exports = router;
