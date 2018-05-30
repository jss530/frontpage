import React from 'react';
import NavDropdown from './NavDropdown'

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Welcome!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="About" />
            <NavItem path="/page3" name="Your Account" disabled="true" />

            <li className="nav-item dropdown">
              <NavDropdown name="Browse Categories">
                <a className="dropdown-item" href="/">Red</a>
                <a className="dropdown-item" href="/">White</a>
                <a className="dropdown-item" href="/">Sparkling</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Other wines</a>
              </NavDropdown>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search wines</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navigation;
