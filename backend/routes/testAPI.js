var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send({
    "items": [
      {"id": 1, "title": "Apples", "url": "$2"},
      {"id": 2, "title": "Peaches", "url": "$5"}
    ]
  });
  console.log("Working");
});

module.exports = router;