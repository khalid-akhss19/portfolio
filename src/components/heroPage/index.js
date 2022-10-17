import React from 'react'
import "./style.css"

import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import prof1 from "../../assets/images/about.jpg"

const HeroProf = () => {
  return (
    <>
    <div className="container">
            <div className="one1 box">
            <Link  to="/" className="navlink">
                    <FacebookIcon className='kicon' style={{ fontSize: "40",}}/>
                </Link>
                <Link  to="/" className="navlink">
                    <GitHubIcon className='kicon' style={{ fontSize: "40"} }/>
                </Link>
                <Link  to="/" className="navlink">
                    <EmailIcon className='kicon' style={{ fontSize: "40", }}/>
                </Link>
            </div>
            <div className="two box">
                <div className='alexaclass'>
                    <h1 className='proftitl'>Hi, I'am 
                    
                    
                    Alexa</h1>
                    <h2 className='subtitle'>Web Developer</h2>
                    <p className='profdetl'>High level experience in web design <br></br>  and  development knowledge, producing <br></br>  quality work.</p>
                    <div className='contactButn'>
                        Contact Me
                </div>
                <div className='scrolldown'>
            Scroll down
        </div>
                </div>
                
                
                
            </div>
            <div className="three box">
            <img src={prof1} alt="profimg" className='profimg'/>
            </div>
        </div>
        
    </>
    
  )
}

export default HeroProf