import React from 'react'
import TopBar from '../../component/layout/topbar'
import Headers from '../../component/layout/header'
import ContactBanner from '../../component/contactsection/contectbanner'

const Contact = () =>  {
  return (
    <>
<TopBar/>
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
      <ContactBanner/>
    
    
    
    </>
  )
}

export default  Contact 