import React from 'react'
import arrowup from '../assets/arrowup.svg'
import fb from '../assets/fb.svg'
import mail from '../assets/mail.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import './footer.scss'

const Footer = () => {

 
    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }
  
   
  return (
    <div id="footer">
<div class="container" >
    <div class="arrowup" onClick={scrollToTop}><img src={arrowup} alt="arrow" onClick="scrollToTop()"/></div>
    <div class="backup" onClick={scrollToTop}><h3>BACK TO TOP</h3></div>
    <div class="social">  
    <div class="fb"> <img src={fb} alt="fb"/></div>
    <div class="linkedin"><img  src={linkedin} alt="linkedin"/></div>
    <div class="insta"><img  src={insta} alt="insta"/></div>
    <div class="mail"><img  src={mail} alt="mail"/></div>
</div>


    <div class="Reserved"><h3>
        @2020 Tomasz Gajda All Rights Reserved.
    </h3></div>
</div>
</div>
  )
}

export default Footer