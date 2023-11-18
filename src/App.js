import "./App.css";
import NavBar from "./Components/NavBar";
import Form from "./Components/Forms";
import { Alerts } from "./Components/Setalerts";
// import TempFile from './Components/TempFile';
import { useState } from "react";

// const jsondata={
//   name:"Hemamth",
//   age:22
// }
// function NavBarRC() {
//   return (<>
//     <NavBar NavBarTitle="Text-Utils" link="https://www.google.com/"/>
//     {/* <textForm name="Hemanth"/>/ */}
//     </>
//   );
// }

// export function App1(){
//   return (<Table slno={1} fname="Hemanth" lname="N B" DOB="06-03-2001"/>);
// }

export function TextAreaRC() {
  // const [darkmode,setdarkmode]=useState(false)
  const [mode, setmode] = useState("light");
  const [alert, setAlert]=useState(null)

  const changeMode = (event) => {
    if (mode === "light") {
      const body = document.body;
      body.style.backgroundColor = "black";
      body.style.color = "white";

      setmode("dark");
      event.target.innerText = "Light";
      setAlert({
        message:"Theme has been successfully changed to Dark",
        type:"light"
      })
    } else if (mode === "dark") {
      const body = document.body;
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setmode("light");
      event.target.innerText = "Dark";
      setAlert({
        message:"Theme has been successfully changed to Light",
        type:"dark"
      })
    }
  };

  const showAlert=(operationType)=>{
    console.log(operationType)
    if(operationType==="Change to upperCase"){
      setAlert({
        message:"Text has been changed to UpperCase",
        type:"success"
      })
    }
    else if(operationType==="Change to LowerCase"){
      setAlert({
        message:"Text has been changed to LowerCase",
        type:"success"
      })
    }

    else if(operationType==="Clear Text"){
      setAlert({
        message:"Text has been Cleared",
        type:"warning"
      })
    }
    else if(operationType==="empty"){
      setAlert({
        message:"Text box is empty. Please write something",
        type:"danger"
      })
    }
    else if(operationType==="Copy Text")
    {
      setAlert({
        message:"Text has been copied to ClipBoard",
        type:"success"
      })
    }

  }
  // const SetdarkMode=(event)=>{
  //   let str=event.target.innerText;
  //   if(str==='Dark'){
  //     const body=document.body;
  //     body.style.backgroundColor='black'
  //     body.style.color='white'

  //     setdarkmode(true)

  //     event.target.innerText='Light'
  //     event.target.className = 'btn btn-light'
  //   }
  //   else if(str==='Light'){
  //     const body=document.body;
  //     body.style.backgroundColor='white'
  //     body.style.color='black'

  //     setdarkmode(false)

  //     event.target.innerText='Dark'
  //     event.target.className = 'btn btn-dark'
  //   }
  // }

  return (
    <>
      <NavBar
        NavBarTitle="Text-Utils"
        link="https://www.google.com/"
        mode={mode}
        changeMode={changeMode}
        showAlert={showAlert}
      />
      <Alerts message="This is a message" alert={alert} />
      <div className="container">

        <Form textAreaTitle="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <button type="button" className="btn btn-dark" onClick={SetdarkMode}>Dark</button> */}
      </div>
    </>
  );
}

// export function JsonFileRC() {
//   return (
//     <TempFile jsondata={jsondata}/>
//   )
// }

// export default NavBarRC;
