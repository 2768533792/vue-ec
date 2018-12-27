var express = require('express')
var router = express.Router()
const connection = require('../mysql')

router.get('/', function(req, res, next) {
  var res = res
  var req = req

  var sql = "select login_account, login_password from sysuser_account"
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
