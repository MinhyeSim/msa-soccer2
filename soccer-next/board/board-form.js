import React,{useState} from "react"
import style from "board/style/board-form.module.css"


export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name, subject} = inputs

    const handleChange = e => {
        e.preventDefault()
        const {name,value} = e.target;
        setInputs({...inputs, [name]: value})
    } 

    const handleSubmit = e => {
        e.preventDefault()
        const boardForm = {passengerId,name,subject}
        alert(`데이터셋 출력 : ${JSON.stringify(boardForm)}`)
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">PassengerId</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={handleChange} />
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId">
                    <option value="K09" selected>Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <input type="texteara"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} value="Submit" onClick={handleSubmit}/>
            </div>
            </htmlForm>
            </div>
    </>)
}