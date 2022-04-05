const express = require('express');
const gameRouter = express.Router();

gameRouter.use(function log(req, res, next) {
    console.log('### 관리자 서버 ###');
    next();
});

module.exports = gameRouter;