var express = require('express')
var router = express.Router()
const connection = require('../mysql')

router.get('/', function(req, res, next) {
  var res = res
  var req = req

  var sql = "select parent_id, cat_name, cat_logo, level from syscategory_cat"
  connection.query(sql, function(err, rows, fields) {
    if (err) {
      console.log('[query] - :' + err)
      return
    }
    console.log(rows)
    res.send(rows)
  })
})

module.exports = router
