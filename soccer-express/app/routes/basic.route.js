const express = require('express');
const basicRouter = express.Router();

basicRouter.use(function log(req, res, next) {
    console.log('### 경기 서버 ###');
    next();
});