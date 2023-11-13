import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Forms';
// import TempFile from './Components/TempFile';
import { useState } from 'react';

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
  
  const [darkmode,setdarkmode]=useState(false)

  const SetdarkMode=(event)=>{
    let str=event.target.innerText;
    if(str==='Dark'){
      const body=document.body;
      body.style.backgroundColor='black'
      body.style.color='white'

      setdarkmode(true)

      event.target.innerText='Light'
      event.target.className = 'btn btn-light'
    }
    else if(str==='Light'){
      const body=document.body;
      body.style.backgroundColor='white'
      body.style.color='black'

      setdarkmode(false)

      event.target.innerText='Dark'
      event.target.className = 'btn btn-dark'
    }
  }



  return (<>
    <NavBar NavBarTitle="Text-Utils" link="https://www.google.com/" darkmode={darkmode}/>
    <div className="container">
    <Form textAreaTitle="Enter your text to analyze"  darkmode={darkmode}/>
    <button type="button" className="btn btn-dark" onClick={SetdarkMode}>Dark</button>
    </div>
    </>
  )
}


// export function JsonFileRC() {
//   return (
//     <TempFile jsondata={jsondata}/>
//   )
// }



// export default NavBarRC;
