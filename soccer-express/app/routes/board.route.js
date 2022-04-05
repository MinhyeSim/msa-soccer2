const express = require('express');
const boardRouter = express.Router();

boardRouter.use(function log(req, res, next) {
    console.log('### 게시판 서버 ###');
    next();
});

const test = (req, res) => {
    const {passengerId, name, teamId, subject} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`passengerId 값 : ${passengerId}`)
    console.log(`name값 : ${name}`)
    console.log(`teamId 값 : ${teamId}`)
    console.log(`subject 값 : ${subject}`)
    res.json(req.body)
}
boardRouter.post("/write", test)



module.exports = boardRouter;