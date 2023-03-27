import React from "react";

import Headers from "../../component/layout/header";
import AboutBanner from "../../component/aboutsection/aboutbanner/aboutbanner";
import ServicesCard from "../../component/servicesection/servicesdeliverycard/servicescard";
import TopStories from "../../component/topstories";
import Counting from "../../component/aboutsection/counting/counting";
import WinderCollection from "../../component/aboutsection/windercollection/windercollection";
import Content from "../../component/content/content";
import OurBestClient from "../../component/aboutsection/ourbestclient/ourbestclient";
import TopBar from "../../component/layout/topbar";
import Testimonial from "../../component/portfoliosection/testimonial/testimonial";
import Footer from "../../component/layout/footer";
import BannerCard from "../../component/banner-card";

const About = () => {
  return (
    <>
      <TopBar />
      <div className="header_wrapper">
        <div className="container-fluid about_container w-100  ">
          <Headers
            title=" Suprema"
            style={{ color: "white" }}
            title1="Home"
            title2="Products"
            title3="Services"
            title4="Portfolio"
            title5="About"
            title6="Contact"
            title7="Login"
          />
        </div>
      </div>
      <AboutBanner />
      <ServicesCard />
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-12">
            <h2 className="text-center">Tell the world about yourself.</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
          </div>
        </div>
        <div className=" row justify-content-center">
          <TopStories
            image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-1.jpg"
            title="Maria Jackson"
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
            readmore="Continue reading"
          />
          <TopStories
            image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-5.jpg"
            title="Duncan Duffy"
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
            readmore="Continue reading"
          />
          <TopStories
            image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-4.jpg"
            title="Marc Johnson"
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
            readmore="Continue reading"
          />
        </div>
      </div>

      <Counting />
      <WinderCollection />

      <div className="container">
        <Content
          title="Fully Responsive"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />

        <Content
          title="SEO Optimized"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />
        <Content
          title="Trendy Design"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />
      </div>

      <div className="container">
        <Content
          title="WooCommerce"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />

        <Content
          title="One-Click Import"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />
        <Content
          title="Retina Ready"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        />
      </div>
      <OurBestClient />
      <div className="about_testimonial w-100" >
      <Testimonial  image = "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-shop-6-parallax.jpg" />
      </div>
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-1.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-2.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-3.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-4.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-5.jpg" />

      <Footer/>
     
    </>
  );
};

export default About;
