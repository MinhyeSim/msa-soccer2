require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;

//const admin = require('./app/routes/admin.route')
//const basic = require('./app/routes/basic.route')
const board = require('./app/routes/board.route');
//const game = require('./app/routes/game.route')
//const todo = require('./app/routes/todo.route')
const user = require('./app/routes/user.route');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//app.use('/api/admin', admin);
//app.use('/api/basic', basic);
app.use('/api/board', board);
//app.use('/api/game', game);
//app.use('/api/todo', todo);
app.use('/api/user', user);

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  })
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})



app.post("/api/basic/bmi", (req, res)=>{
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름 : ${name}`)
  console.log(`키 : ${height}`)
  console.log(`몸무게 : ${weight}`)
  const json = computeBMI(name, height, weight)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})

app.post("/api/basic/calc", (req, res)=>{
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자1 : ${num1}`)
  console.log(`연산자 : ${opcode}`)
  console.log(`숫자2 : ${num2}`)
  const json = computeCALC(num1, opcode, num2)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})