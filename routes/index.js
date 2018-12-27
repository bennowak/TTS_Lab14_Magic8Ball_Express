let express = require('express');
let router = express.Router();

let js_stuff = {"objects":
    [
        {"name": "bill",
            "age": 23,
            "major": "sci"},
        {"name": "jim",
            "age": 33,
            "major": "math"},
        {"name": "kelly",
            "age": 33,
            "major": "sci"}
    ], "sometext": "blah blah blah"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', msg: "Supercalifragiliciousexpialidocious!", bg_color: "blue"});
});

module.exports = router;
