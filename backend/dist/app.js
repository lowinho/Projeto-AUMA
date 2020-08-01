"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
const { errors } = require('celebrate');
var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);
var _node = require('@sentry/node'); var Sentry = _interopRequireWildcard(_node);
// eslint-disable-next-line no-unused-vars
require('express-async-errors');
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _connection = require('./database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _sentry = require('./config/sentry'); var _sentry2 = _interopRequireDefault(_sentry);



class App {
    constructor() {
        this.app = _express2.default.call(void 0, );

        Sentry.init(_sentry2.default);

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.app.use(Sentry.Handlers.requestHandler());
        this.app.use(_cors2.default.call(void 0, ));
        this.app.use(_express2.default.urlencoded({ extended: true }))
        this.app.use(_express2.default.json());
    }

    routes() {
        this.app.use('/users', _userRoutes2.default);
        this.app.use('/token', _tokenRoutes2.default)
        this.app.use(errors());
        this.app.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
      this.app.use(async (err, req, res, next) => {
        if (process.env.NODE_ENV === 'development') {
          const errors = await new (0, _youch2.default)(err, req).toJSON();

          res.status(500).json(errors);
        }

        return res.status(500).json({ error: 'Internal error client' });
      });
    }
}

exports. default = new App().app;
