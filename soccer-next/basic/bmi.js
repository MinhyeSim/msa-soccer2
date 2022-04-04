import axios from 'axios';
import React,{useState} from 'react' 

export default function Bmi (){

    const[inputs,setInputs] = useState({})
    const{name,height,weight} = inputs;
    const[result,setResult] = useState("")
 
    const handleChange = e => { 
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name] : value})
    }
        
    const handleClick = e => {
        e.preventDefault()
        const bmiRequest = {name,height,weight}
        alert(`사용자 이름 : ${JSON.stringify(bmiRequest)}`)
        axios.post('http://localhost5000/api/bmi/write', inputs)
        .then(res => {
            alert(res.data)
            setResult(JSON.stringify(res.data))
        })
        .catch(err => alert(err))           
    }
    return (<div>
    <form>
    <h1>Bmi폼</h1>

    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange}/><br/>

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange}/><br/>

    <label htmlFor=""><b>weight</b> </label>
    <input type="text" name="weight" onChange={handleChange}/><br/>

    <button onClick={handleClick}> BMI 체크</button>
      
    </div>
    </form>
    <div>결과 : {result}</div>

    </div>)
    
    }