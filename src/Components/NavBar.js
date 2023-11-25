import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  // const [navbarClass, setNavbarClass] = useState('navbar navbar-expand-lg navbar-dark bg-dark');


  // const dark = 'navbar navbar-expand-lg navbar-dark bg-dark'
  // const light = 'navbar navbar-expand-lg navbar-light bg-light'


  // if(props.darkmode){
  //   setNavbarClass('navbar navbar-expand-lg navbar-light bg-light')
  // }
  // if(props.lightmode){

  //   // const navbar = document.querySelector('.navbar');
  // setNavbarClass('navbar navbar-expand-lg navbar-light bg-light')
  // if (navbar) {
  //   // const classNames = Array.from(navbar.classList);
  //   // console.log(classNames);

  // setNavbarClass((prevClass) => {
  // Toggle between different class names based on the current class
  //   return prevClass === 'navbar navbar-expand-lg navbar-light bg-light'
  //     ? 'navbar navbar-expand-lg navbar-dark bg-dark'
  //     : 'navbar navbar-expand-lg navbar-light bg-light';
  // });

  // }
  // navbar.className="navbar navbar-expand-lg navbar-light bg-light"
  // }


  return (
    // <nav className={props.darkmode ? dark : light}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.NavBarTitle}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>


            <li className="nav-link nav-item">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.changeMode}>Dark</label>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

// PROPTYPES

// If NavBarTitle is not passed as props it will set default value TODO using defaultProps.
// If defaultProps is not implemented then it throws error in console.
NavBar.propTypes = {
  NavBarTitle: PropTypes.string.isRequired
}


// As we are passing string as a props to this component and we are specifying number as datatype. This will throw error in console  
// NavBar.propTypes={
//   NavBarTitle:PropTypes.number
// }

NavBar.defaultProps = {
  NavBarTitle: "TODO"
}