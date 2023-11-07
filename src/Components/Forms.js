import React,{useState} from "react"

export default function Form(props){

    const[text,setText]=useState("Enter text here2")
    
    const changeToUpper=()=>{
        let upper=text.toUpperCase()
        setText(upper)
    }

    const changeToLower=()=>{
        let lower=text.toLowerCase()
        setText(lower)
    }

    const onChangingValue=(event)=>{
        setText(event.target.value)
        console.log(text)
    }
    return(
    <>
    <div className="mb-3">
    <h1>{props.textAreaTitle}</h1>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" rows="10" cols={"10"} value={text} onChange={onChangingValue}></textarea>
  <br/>
  <button type="button" className="btn btn-primary" onClick={changeToUpper}>Change to upperCase</button>
  <button type="button" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={changeToLower}>
  Change to upperCase
</button>
</div>
    </>
    )
}

Form.defaultProps={
    textAreaTitle:"Text Area"
}

// Form.defaultProps={
//     name:"N B",
//     designation:"SDE",
//     companyName:"Microsoft"
// }
