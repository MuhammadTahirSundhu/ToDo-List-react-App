import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { themeContext } from "..";
import { deleteToDoContext } from "..";
export default function Navbar(props) {
  
  const [deleteFlag,setdeleteFlag] = useContext(deleteToDoContext);
  const [Theme,setTheme] = useContext(themeContext);
  const textColor = Theme === 'dark' ? 'white' : 'black'; 

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${Theme}`} style={{ color: textColor }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: textColor }}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={()=>{setdeleteFlag(0)}}
                  style={{ color: textColor }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={()=>{setdeleteFlag(0)}} style={{ color: textColor }}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact"onClick={()=>{setdeleteFlag(0)}} style={{ color: textColor }}>
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: textColor }}
                >
                  Resources
                </Link>
                <ul className="dropdown-menu" >
                  <li>
                    <Link className="dropdown-item" to="/addTodo" onClick={()=>{setdeleteFlag(0)}}>
                      Add ToDo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myTodos"onClick={()=>{setdeleteFlag(1)}}>
                      Delete ToDo
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myTodos" onClick={()=>{setdeleteFlag(0)}}>
                      My ToDo's
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTheme('dark');
                    console.log("Theme set to dark");
                  } else {
                    setTheme('light');
                    console.log("Theme set to light");
                  }
                }}              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// this means that the title should be of string type
Navbar.propTypes = { title: PropTypes.string };
// This means that no value will pass to componennt from the calling location this value is set to title by default
// Navbar.defaultProps ={title: "Enter You Navabr Title here!"}
