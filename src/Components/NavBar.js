import React from 'react'
import PropTypes from 'prop-types';

export default function NavBar(props) {
  // const [navbarClass, setNavbarClass] = useState('navbar navbar-expand-lg navbar-dark bg-dark');
const dark='navbar navbar-expand-lg navbar-dark bg-dark'
const light='navbar navbar-expand-lg navbar-light bg-light'
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
    <nav className={props.darkmode?dark:light}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.NavBarTitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://google.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link}>Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

// PROPTYPES

// If NavBarTitle is not passed as props it will set default value TODO using defaultProps.
// If defaultProps is not implemented then it throws error in console.
NavBar.propTypes={
  NavBarTitle: PropTypes.string.isRequired
}


// As we are passing string as a props to this component and we are specifying number as datatype. This will throw error in console  
// NavBar.propTypes={
//   NavBarTitle:PropTypes.number
// }

NavBar.defaultProps={
  NavBarTitle:"TODO"
}