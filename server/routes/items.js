var express = require('express')
var router = express.Router()
const connection = require('../mysql')

router.get('/', function(req, res, next) {
  var res = res
  var req = req
  var sql = ''
  // 查询列表
  if (req.query.catId) {
    sql = "select item_id, shop_id, cat_id, title, sub_title, price, mkt_price, image_default_id from sysitem_item where cat_id=" + req.query.catId
  } else if (req.query.itemId) {
    sql = "select item_id, shop_id, brand_id, cat_id, title, sub_title, bn, price, mkt_price, image_default_id, weight, spec_desc, list_image from sysitem_item where item_id=" + req.query.itemId
  } else {
    sql = "select item_id, shop_id, cat_id, title, sub_title, price, mkt_price, image_default_id from sysitem_item"
  }
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
