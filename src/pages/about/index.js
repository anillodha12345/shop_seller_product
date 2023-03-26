import React from 'react'

import Headers from '../../component/layout/header'
import AboutBanner from '../../component/aboutsection/aboutbanner/aboutbanner'
import ServicesCard from '../../component/servicesection/servicesdeliverycard/servicescard'
import TopStories from '../../component/topstories'

 const  About = ()  => {
  return (
   <>

<div className='wrapper_about_header'>
  <div className='container-fluid about_container w-100 text-danger '>
<Headers
        title=" Suprema"
        style={{ color: "red" }}
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
  <AboutBanner/>
  <ServicesCard/>
  <div className="container">
      <div className="row pt-5">
            <div className="col-md-12">
              <h2 className="text-center">Tell the world about yourself.</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
            </div>
          </div>
          <div className=' row justify-content-center'>
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-1.jpg"
       title="Maria Jackson"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
       />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-5.jpg"
       title="Duncan Duffy"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-team-4.jpg"
       title ="Marc Johnson"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      </div>

      </div>
  
   </>
  )
}

export default About