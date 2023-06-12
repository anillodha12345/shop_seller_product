import React from "react";
import AboutBanner from "../../component/aboutsection/aboutbanner/aboutbanner";
import Skill from "../../component/skill/skill";
import image1 from "../../assets/images/aboutbanner2.jpg" 
import Ourteam from "../../component/ourteam/ourteam";
import Authentic from "../../component/Authentic/authentic";

const About = () => {
  return (
    <>
      {/* <TopBar /> */}

      <AboutBanner image={image1}  name="About Us" page="About Us"/> 
      <Authentic/>
      <Ourteam/>
      <Skill/>


     
    </>
  );
};

export default About;
