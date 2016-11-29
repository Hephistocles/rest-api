'use strict';

let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let swaggerize = require('swaggerize-express');
let swaggerUi = require('swaggerize-ui');
let path = require('path');

let app = express();

let server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    // docspath: '/api-docs',
    handlers: path.resolve('./handlers'),
}));

app.use('/docs', swaggerUi({
  docs: '/v1/api-docs' // from the express route above.
}));

server.listen(9000, 'localhost', function () {
    app.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
