var express = require('express')
var router = express.Router()
const connection = require('../mysql')

router.get('/', function(req, res, next) {
  var res = res
  var req = req

  var sql = "select brand_name, brand_logo image_default_id from syscategory_brand"
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
