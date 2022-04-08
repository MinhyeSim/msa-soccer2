import React,{useState} from 'react'

export default function Signin(){
    const [inputs, setInputs] =useState({})
    const{username, password} = inputs;
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs,[name]: value})
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const loginRequest = {username, password}
        alert(`사용자 이름 : ${JSON.stringify(loginRequest)}`)
    }
    return (<><h1>로그인폼</h1>
    <form>
  
    <div>
    <label><b>Username</b></label>
    <input type="text" name='username' onChange={handleChange} /><br/>

    <label htmlFor=""><b>Password</b></label>
    <input type="text" name='password' onChange={handleChange}/><br/>

    <button onClick={handleClick}>Login</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    
    
    </div>
    <div>
    <button>Cancel</button><br />
    <span>Forgot <a>password?</a></span>
    </div>
    </form>
    </>
    )
}
