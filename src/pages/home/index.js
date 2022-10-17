import React from "react";
import HeroProf from "../../components/heroPage";

const Home = () => {
  return (
    <>
    <div style={{paddingTop:"70px"}}>
        <HeroProf/>
    </div>
    <div>
        
        <h4>ABOUT</h4>
        <p>about__description Web developer, with extensive knowledge and years of experience, working in web technologies and Ui /
             Ux design, delivering quality work.</p>
             
    </div>
    <div>
        <h4>SERVICES</h4>
        <p>services__modal-service</p>
    </div>
    <div>
        <h4>PORTFOLIO</h4>
        <p>-Website adaptable to all devices, with ui components and animated interactions.
</p>
    </div>
    <div>
        <h4>PROJECT</h4>
        <p>Contact me now and get a 30% discount on your new project.</p>
    </div>
    <div>
        <h4>TESTIMONIAL</h4>
        <p>testimonial__description</p>
    </div>
    <div>
        <h4>FOOTER</h4>
        <p>footer__social with links</p>
    </div>
    </>
  );
};

export default Home;
