const express = require('express');
const boardRouter = express.Router();

boardRouter.use(function log(req, res, next) {
    console.log('### 게시판 서버 ###');
    next();
});

//boardRouter.post("/write", write)


module.exports = boardRouter;