import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const NavLinkCSS=(isActive)=>{
      return{
          fontWeight:isActive?'bold':'normal',
          fontSize:isActive?'23px':'20px'
      }
  }
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <div className="logo">
            <nav>
              <NavLink id="navbar" style={NavLinkCSS} to="/">
                Home
              </NavLink>
              <NavLink id="navbar-1" style={NavLinkCSS} to="/about">
                About
              </NavLink>
              <NavLink id="navbar-1" style={NavLinkCSS} to="/contact">
                Contact
              </NavLink>
              <NavLink id="navbar-1" style={NavLinkCSS} to="/support">
                Support
              </NavLink>
              <NavLink id="navbar-2" style={NavLinkCSS} to="register">
                Register
              </NavLink>
              <NavLink id="navbar-3" style={NavLinkCSS} to="login">
                Login
              </NavLink>
            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
