const express = require('express');
const todoRouter = express.Router();

todoRouter.use(function log(req, res, next) {
    console.log('### 스케쥴 서버 ###');
    next();
});

