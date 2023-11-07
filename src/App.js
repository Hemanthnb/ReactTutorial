import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Forms';
import TempFile from './Components/TempFile';

const jsondata={
  name:"Hemamth",
  age:22
}

function NavBarRC() {
  return (<>
    <NavBar NavBarTitle="Text-Utils" link="https://www.google.com/"/>
    <textForm name="Hemanth"/>
    </>
  );
}

// export function App1(){
//   return (<Table slno={1} fname="Hemanth" lname="N B" DOB="06-03-2001"/>);
// }


export function TextAreaRC() {
  return (
    <div className="container">
    <Form textAreaTitle="Enter your text to analyze" />
    </div>
  )
}


export function JsonFileRC() {
  return (
    <TempFile jsondata={jsondata}/>
  )
}



export default NavBarRC;
