let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tester', { title: 'Ben' , msg: "Hello"});
});

module.exports = router;
