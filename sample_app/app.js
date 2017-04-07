var rocket = require('../lib/rocket'),
    logger = require('morgan'),
    serveStatic = require('serve-static')

var app = rocket()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(logger())
app.use(serveStatic(__dirname + '/public'))

app.use(function (req, res, next) {
  console.log('from customer middleware: ', req.method, req.url)
  next()
});

app.get('/', function(req, res) {
  res.render('index', {layout: 'layout'})
})

app.listen(3000)