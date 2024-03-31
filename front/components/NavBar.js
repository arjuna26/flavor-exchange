import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import NavbarIcon from './RedHatIcon.png'



const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
    fontSize: "1.3rem"
};


export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
            <div className="container-fluid">
              <li className="navbar-brand"><img src={NavbarIcon} alt="Icon" width="55" height="55"/></li>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <li className="nav-link"><NavLink to="/home" style={ linkStyle }>Home</NavLink></li>
                  <li className="nav-link"><NavLink to="/recipes" style={ linkStyle }>Recipes</NavLink></li>
                  <li className="nav-link"><NavLink to="/contact" style={ linkStyle }>Add Ingredient</NavLink></li>
                  <li className="nav-link"><NavLink to="/ingredient" style={ linkStyle }>Ingredients</NavLink></li>
                  {/* add login button to navbar */}
                </div>
              </div>
            </div>
          </nav>
        )
    }

    
};

export default NavBar

