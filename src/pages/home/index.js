import React from "react";
import Banner from "../../component/banner";
import Sliders from "../../component/sliders";

import BannerBackground from "../../component/bannerbackground";
import TopStories from "../../component/topstories";
import Content from "../../component/content/content";
import 'aos/dist/aos.css';
import BestCategory from "../../component/bestcategory-section/best-category";
import PrintingSolution from "../../component/printing-solutoin/printing-solution";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/contentimage1.png"
import image2 from "../../assets/images/contentimage2.png"
import image3 from "../../assets/images/contentimage3.png"
import topstoreimage1 from "../../assets/images/topstoreimage1.jpg"
import topstoreimage2 from "../../assets/images/topstoreimage.2.jpg"
import topstoreimage3 from "../../assets/images/topstoreimage3.jpg"

const Home = () => {
  // const [first, setfirst] = useState("rajat");
  return (
    <>
     
      <Banner />

 <div className="mrt70  mrb70">


<div className="container">
  <div className="row" >
    <div className="col-md-4">
      <Content
      image = {image1}
        title="Designed With Care"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dicta laborum officiis nobis odio? Facere quo reiciendis qui consequatur dolore. ."
        text=" READ MORE"
      />
       </div>
       <div className="col-md-4">
      <Content
      image={image2}
        title="Stunning On All Screens"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dicta laborum officiis nobis odio? Facere quo reiciendis qui consequatur dolore. ."
        text=" READ MORE"
      />
      </div>
      <div className="col-md-4">
      
        <Content
        image = {image3}
        title="Stunning On All Screens"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ."
        text=" READ MORE"
      />
      </div>
      </div>

</div>
</div>
<PrintingSolution/>

     

      

      <Sliders />
   
      <BannerBackground />
      <BestCategory  />

     
      {/* <FreeShipping data-aos="fade-up" data-aos-anchor-placement="top-center"/> */}
      <div className="mrt70">

      
      <div className="container">
      <div className="row">
            <div className="col-md-12">
              <h6 className="text-center">Latest Posts</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Read Our Top Stories</h3>
            </div>
          </div>

<div className="container">
    <div className="row" >
    <div className="col-md-4">
        
      <TopStories
       image= {topstoreimage1}
       title="10 Innovative Playlist Apps"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
       readmore = "Continue reading"
       />
       </div>
       <div className="col-md-4">
      <TopStories
       image= {topstoreimage2}
       title="15 Best Coffee Shops In LA"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      </div>
      <div className="col-md-4">
      <TopStories
       image= {topstoreimage3}
       title ="Gabriele Jones"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      </div>

      </div>

      <div className="banner-button text-center pdtop20">
      <Link to="/blog" className="text-decoration-none color ">
                        <button class=" rounded animate__animated  animate__bounceInUp banner-button1  color">
                        
                          VIEW ALL
                          
                      
                        </button>
                        </Link>

            </div>
  </div>
</div>
</div>    
     
    </>
  );
};

export default Home;
