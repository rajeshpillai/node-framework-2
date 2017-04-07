# rocket


Rocket is a web framework inspired by Express.

## Usage

    var rocket = require('rocket')

    var app = rocket()

    app.set('views', __dirname + '/views')
    app.set('view engine', 'jade')

    app.use(anyExpressMiddleware())

    app.get('/', function(req, res) {
      res.render('index', { title: 'rocket' })
    })

    app.listen(3000)

## Installation

You need:

- A recent version of [node](http://nodejs.org/).

To install Node modules and compile the parser:

    $ npm install

## License

