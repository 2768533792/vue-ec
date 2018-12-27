export default function query(sql) {
  router.get('/', function(req, res, next) {
    var res = res
    var req = req

    connection.query(sql, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err)
        return
      }
      console.log(rows)
      res.send(rows)
    })
  });
}