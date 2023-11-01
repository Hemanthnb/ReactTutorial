import './App.css';
import NavBar from './Components/NavBar';
import Table from './Components/Table';

function App() {
  return (
    <NavBar NavBarTitle="TO-DO" link="https://www.google.com/"/>
  );
}

export function App1(){
  return (<Table slno={1} fname="Hemanth" lname="N B" DOB="06-03-2001"/>);
}

export default App;
