"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ImageController = require('../controllers/ImageController'); var _ImageController2 = _interopRequireDefault(_ImageController);
// import auth from '../middlewares/loginRequired';

const router = _express.Router.call(void 0, );

router.post('/', _ImageController2.default.store);

exports. default = router;
