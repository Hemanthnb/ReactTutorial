import React,{useState} from "react"
import './Responsive.css'

let upperCount=0,lowerCount=0
export default function Form(props){
    let obj={
        color:"black",
        backgroundColor:"white"
    }

    // if(props.darkmode){
    //     obj={
    //         color:"white",
    //         backgroundColor:"black"
    //     } 
    // }

    // else if(!props.darkmode){
    //     obj={
    //         color:"black",
    //     backgroundColor:"white"
    //     }
    // }

    if(props.mode==='light'){
        obj={
        color:"black",
        backgroundColor:"white"}
    }
    else{
        obj={
        color:"white",
        backgroundColor:"black"}
    }

    const[text,setText]=useState('')

    const setCounts=()=>{
        TotalUpperCase()
        TotalLowerCase()
    }

    
    const changeToUpper=(event)=>{
        if(text.length===0){
            props.showAlert("empty")
        }
        else{
        let upper=text.toUpperCase()
        setText(upper)
        props.showAlert(event.target.innerText)
        }
    }

    const changeToLower=(event)=>{
        if(text.length===0){
            props.showAlert("empty")
        }else{
        let lower=text.toLowerCase()
        setText(lower)
        props.showAlert(event.target.innerText)}
    }

    
    const TotalUpperCase=()=>{
        let count=0
        for(let i in text){
            if(text[i]>='A'&&text[i]<='Z'){
                count++;
            }
        }
        upperCount=count
    }

    const TotalLowerCase=()=>{
        let count=0
        for(let i in text){
            if(text[i]>='a'&&text[i]<='z'){
                count++;
            }
        }
        lowerCount=count
    }
    const onChangingValue=(event)=>{
        setText(event.target.value)
    }

    const clearTextArea=(event)=>{
        if(text.length===0){
            props.showAlert("empty")
        }else{
        setText("")
        props.showAlert(event.target.innerText)}
    }

    const copyText=(event)=>
    {
        if(text.length===0){
            props.showAlert("empty")
        }
        else{
        let box=document.getElementById('myBox');
        box.select()
        navigator.clipboard.writeText(box.value)
        props.showAlert(event.target.innerText)
        }

        // Or we can do like this in a easy way 
        // let str=text
        // navigator.clipboard.writeText(str)
    }
    setCounts()
    
    return(
    <>
    <div className="mb-3" id="mainContainer">
    <h1>{props.textAreaTitle}</h1>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox"  placeholder="Enter your text here..."rows="10" cols={"10"} value={text} onChange={onChangingValue} style={obj}></textarea>
  <br/>

<div className="buttonsContainer">

  <button type="button" className="btn btn-primary" onClick={changeToUpper}>Change to upperCase</button>
  <button type="button" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={changeToLower}>
  Change to LowerCase
</button>
<button type="button" className="btn btn-danger" style={{marginLeft:"10px"}} onClick={clearTextArea}>
  Clear Text
  </button>
<button type="button" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={copyText}>
  Copy Text
</button>
</div>
</div>

<div className="summaryContainer">
    <h3>Text Summary</h3>
    <div className="buttonsContainer">
     <p style={{marginRight:"10px"}}>Total number of character : <b>{text.length}</b></p>   
     <p style={{marginRight:"10px"}}>Total number of words : <b>{text.trim().split(' ').length}</b></p>   
     <p style={{ marginRight:"10px"}}>Total time taken for one word :<b>{((text.split(" ").length-1)*0.008).toFixed(2)}</b> mins</p>   
     <div>
     <p>Total Number Of UpperCase : <b>{upperCount}</b></p>
     <p>Total Number Of Lowercase : <b>{lowerCount}</b></p>
     </div>
     </div>
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
