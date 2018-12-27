var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '127.0.0.1', // 主机
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'ecdb', // 数据库名称
  charset: 'UTF8_GENERAL_CI' // 数据库编码
})

// 创建一个connection连接
connection.connect(function (err) {
  if (err) {
    console.log('[query] - :' + err)
    return
  }
  console.log('[connection connect] succeed!')
})

module.exports = connection