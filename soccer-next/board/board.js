import React,{useState} from "react";

export default function Board (){
    const [inputs,setInputs] = useState({})
    const {team} = inputs;

    return (<><h1>Board</h1>
    
    <label><b>name</b></label>
    <input id = "name" type=""/><br/>
    
    </>
    )

}