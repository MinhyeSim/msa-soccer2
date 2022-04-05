const { Router } = require('express');
const express = require('express');
const boardRouter = express.Router();

boardRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

boardRouter.post("/write",(req, res) => {
    const {passengerId, name, teamId, subject} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`passengerId 값 : ${passengerId}`)
    console.log(`name값 : ${name}`)
    console.log(`teamId 값 : ${teamId}`)
    console.log(`subject 값 : ${subject}`)
    res.json(req.body)
  })

mmodule.exports = boardRouter;