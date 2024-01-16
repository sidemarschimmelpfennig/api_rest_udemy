"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _homeRoutes = require('./homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _imageRoutes = require('./imageRoutes'); var _imageRoutes2 = _interopRequireDefault(_imageRoutes);

const router = new (0, _express.Router)();

router.use('/', _homeRoutes2.default);
router.use('/users/', _userRoutes2.default);
router.use('/tokens/', _tokenRoutes2.default);
router.use('/students/', _alunoRoutes2.default);
router.use('/images/', _imageRoutes2.default);

exports. default = router;
