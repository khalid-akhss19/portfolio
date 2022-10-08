import React from 'react'
import "./style.css";

import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
    <div className='outerContainer'>
      <div className='title'>
          <h2 className='titlelogo'>logohere </h2>
      </div>
      <div className='rightlinks'>
        <div className="rightlinks">
            <Link className="navlinks" to="/" className="navlink">
                   <h4>Home</h4> 
            </Link>
            <Link className="navlinks" to="About" className="navlink">
            <h4>About</h4> 
                    
            </Link>
            <Link className="navlinks" to="Skills"className="navlink">
                    <h4>Skills </h4>
            </Link>
            <Link className="navlinks" to="Services"className="navlink">
                    <h4>Services</h4>
            </Link>
            <Link className="navlinks" to="Portfolio"className="navlink">
                    <h4>Portfolio</h4>
            </Link>
            <Link className="navlinks" to="Contactme"className="navlink">
                    <h4>Contact</h4>
            </Link>
            <div className='iconMoon'>
            <DarkModeIcon/>
            </div>
                
            
            
        </div>
      
      </div>
    </div>
  )
}

export default Navbar