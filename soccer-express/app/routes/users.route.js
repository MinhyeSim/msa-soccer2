const express = require('express');
const userRouter = express.Router();


userRouter.post('/sign-up',(req,res) => {
  const {username, password, name, telephone} = req.body
  console.log(`넘어온 JSON값 : ${JSON.stringify(req.body)}`)
  console.log(`사용자 ID : ${username}`)
  console.log(`비밀번호 : ${password}`)
  console.log(`이름 : ${name}`)
  console.log(`전화번호 : ${telephone}`)
  
  res.json(req.body)
  })

module.exports = userRouter;