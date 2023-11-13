import React,{useState} from "react"

let upperCount=0,lowerCount=0
export default function Form(props){
    let obj={
        color:"black",
        backgroundColor:"white"
    }

    if(props.darkmode){
        obj={
            color:"white",
            backgroundColor:"black"
        } 
    }
    else if(!props.darkmode){
        obj={
            color:"black",
        backgroundColor:"white"
        }
    }

    const[text,setText]=useState("Enter text here...")

    const setCounts=()=>{
        TotalUpperCase()
        TotalLowerCase()
    }

    
    const changeToUpper=()=>{
        let upper=text.toUpperCase()
        setText(upper)
    }

    const changeToLower=()=>{
        let lower=text.toLowerCase()
        setText(lower)
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
        console.log(text)
    }

    const clearTextArea=()=>{
        setText("")
    }


    setCounts()
    
    return(
    <>
    <div className="mb-3">
    <h1>{props.textAreaTitle}</h1>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" rows="10" cols={"10"} value={text} onChange={onChangingValue} style={obj}></textarea>
  <br/>
  <button type="button" className="btn btn-primary" onClick={changeToUpper}>Change to upperCase</button>
  <button type="button" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={changeToLower}>
  Change to LowerCase
</button>
<button type="button" className="btn btn-danger" style={{marginLeft:"10px"}} onClick={clearTextArea}>
  Clear Text
</button>

</div>
<div>
    <h3>Text Summary</h3>
     <p style={{display:"inline",marginRight:"10px"}}>Total number of character : <b>{text.length}</b></p>   
     <p style={{display:"inline",marginRight:"10px"}}>Total number of words : <b>{text.split(" ").length-1}</b></p>   
     <p style={{display:"inline", marginRight:"10px"}}>Total time taken for one word :<b>{((text.split(" ").length-1)*0.008).toFixed(2)}</b> mins</p>   
     <div>
     <p style={{display:"inline"}}>Total Number Of UpperCase : <b>{upperCount}</b></p>
     <p style={{display:"inline",marginLeft:"10px"}}>Total Number Of Lowercase : <b>{lowerCount}</b></p>
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
