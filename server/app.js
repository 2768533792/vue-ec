var createError = require('http-errors');
var express = require('express');
var router = express.Router()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')

const http = require('http')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var brandsRouter = require('./routes/brands');
var itemsRouter = require('./routes/items');

// var brandsRouter = router.get('/', function(req, res, next) {
//   var res = res
//   var req = req
//   var sql = "select brand_name, brand_logo image_default_id from syscategory_brand"
//   connection.query(sql, function(err, rows, fields) {
//     if (err) {
//       console.log('[query] - :' + err)
//       return
//     }
//     console.log(rows)
//     res.send(rows)
//   })
// });

// var itemsRouter = router.get('/', function(req, res, next) {
//   var res = res
//   var req = req
//   var sql = "select item_id, shop_id, title, sub_title, price, mkt_price, image_default_id from sysitem_item"
//   connection.query(sql, function(err, rows, fields) {
//     if (err) {
//       console.log('[query] - :' + err)
//       return
//     }
//     console.log(rows)
//     res.send(rows)
//   })
// })

var app = express();

app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Conten-Type', 'Authorization']
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/items', itemsRouter);
app.use('/brands', brandsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
