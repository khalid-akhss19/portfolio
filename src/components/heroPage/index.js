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
        <div className='heroContiner'>
        <div className='heroRightDiv'>
            <div className='one'>
                <Link  to="/" className="navlink">
                    <FacebookIcon/>
                </Link>
                <Link  to="/" className="navlink">
                    <GitHubIcon/>
                </Link>
                <Link  to="/" className="navlink">
                    <EmailIcon/>
                </Link>
            </div>
            <div className='box2'>
                <h1>HI I'am Alexa</h1>
                <h3>Web Developer</h3>
                <h4>High level experience in web design  and development knowledge, producing  quality work.</h4>
            </div>
        </div>
        <div className='heroDiv'> 
            <img src={prof1} alt="profimg" className='profimg'/>
        </div>
        
    </div> 
    <div className="container">
            <div className="one1 box">
            <Link  to="/" className="navlink">
                    <FacebookIcon style={{ color: "black", fontSize: "40", background:"blue"}}/>
                </Link>
                <Link  to="/" className="navlink">
                    <GitHubIcon style={{ color: "black", fontSize: "40", background:"blue"}}/>
                </Link>
                <Link  to="/" className="navlink">
                    <EmailIcon style={{ color: "black", fontSize: "40", background:"blue"}}/>
                </Link>
            </div>
            <div className="two box">
                <div className='alexaclass'>
                    <h1 className='proftitl'>Hi, I'am Alexa</h1>
                    <h2 className='subtitle'>Web Developer</h2>
                    <p className='profdetl'>High level experience in web design <br></br>  and  development knowledge, producing <br></br>  quality work.</p>
                </div>
                
            </div>
            <div className="three box">4</div>
        </div>
    </>
    
  )
}

export default HeroProf