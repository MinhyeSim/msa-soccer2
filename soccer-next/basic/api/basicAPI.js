import axios  from 'axios';
const SERVER = `http://localhost:5000`

export const basicBmi = bmiRequest => axios.post(`${SERVER}/basic/bmi`, bmiRequest)
export const basicGrade = gradeRequest => axios.post(`${SERVER}/basic/grade`, gradeRequest)