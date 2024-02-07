import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const NavLinkCSS=(isActive)=>{
        return{
            fontWeight:isActive?'bold':'normal',
            fontSize:isActive?'23px':'20px'
        }
    }
  return (
    <>
    <nav>
    <NavLink id='navbar' style={NavLinkCSS} to="/">Home</NavLink>
    <NavLink id='navbar' style={NavLinkCSS} to="/about">About</NavLink>
    <NavLink id='navbar' style={NavLinkCSS} to="/contact">Contact</NavLink>
    <NavLink id='navbar' style={NavLinkCSS} to="register">Register</NavLink>
    <NavLink id='navbar' style={NavLinkCSS} to="login">Login</NavLink>
    </nav>
    </>
  )
}

export default Navbar