var express = require('express');
var router = express.Router();
var view = require('../utils/select')
/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM VIEW_INDEX'
    var result = ''
    view.select(sql).then(function (val) {
        result = val
    })
    res.render('show-ui',{data : result, title: 'show-ui'});
});

module.exports = router;
