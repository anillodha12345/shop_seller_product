import React, { useState } from "react";
import Banner from "../../component/banner";
import Sliders from "../../component/sliders";
import Footer from "../../component/layout/footer";
import BannerCard from "../../component/banner-card";
import BannerBackground from "../../component/bannerbackground";
import BestSellers from "../../component/bestsellers";
import FreeShipping from "../../component/free-shipping";
import TopStories from "../../component/topstories";
import Content from "../../component/content/content";
import Headers from "../../component/layout/header";
import TopBar from "../../component/layout/topbar";

const Home = () => {
  const [first, setfirst] = useState("rajat");
  return (
    <>
      <TopBar />
      <Headers
        title=" Suprema"
        style={{ color: "black" }}
        title1="Home"
        title2="Products"
        title3="Services"
        title4="Portfolio"
        title5="About"
        title6="Contact"
        title7="Login"
      />
      <Banner />

 
<div className="container">
      <Content
        title="Designed With Care"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />

      <Content
        title="Stunning On All Screens"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />
        <Content
        title="Stunning On All Screens"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />

</div>

     

      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-1.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-2.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-3.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-4.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/home-shop-1-image-5.jpg" />

      <Sliders />
      <BannerBackground />

      <BestSellers />
      <FreeShipping />
      <div className="container">
      <div className="row pt-5">
            <div className="col-md-12">
              <h6 className="text-center">Latest Posts</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Read Our Top Stories</h3>
            </div>
          </div>
        
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/10-Innovative-Playlist-Apps.jpg"
       title="10 Innovative Playlist Apps"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
       />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/15-Best-Coffee-Shops-In-LA.jpg"
       title="15 Best Coffee Shops In LA"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/The-10-Best-Workouts-Of-2015.jpg"
       title ="Gabriele Jones"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />

      </div>
      
      <Footer />
    </>
  );
};

export default Home;
