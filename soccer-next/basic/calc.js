import React, { useState } from "react";

export default function Calc(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    return <><h1>Calc폼</h1>

    <div>
    <label><b>num1</b></label>
    <input id = "num1" type=""/><br/>

    <label htmlFor=""><b>opcode</b></label>
    <select name="" id="">
        <option value="">+</option>
        <option value="">-</option>
        <option value="">*</option>
        <option value="">/</option>
        <option value="">%</option>
    </select><br/>

    <label><b>num2</b></label>
    <input id = "num2" type=""/><br/>

    <button onClick={()=>{setNum1(document.getElementById('num1').value)}}>숫자1 결정</button>
    <button onClick={()=>{setNum2(document.getElementById('num2').value)}}>숫자2 결정</button>


    </div>
    </>
}