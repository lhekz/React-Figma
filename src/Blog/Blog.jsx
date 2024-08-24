import React from 'react'
import './blog.scss';
import Vector1 from '../../public/vector1/Vector1.svg';
import Vector2 from '../../public/vector2/Vector2.svg';
import Vector3 from '../../public/vector3/Vector3.svg';
import mrdev from '../../public/mrdev.png';
import whitelogo from '../../public/whitelogo.svg';
import menulogo from '../../public/menulogo.svg';

import { Fragment } from 'react';
// import rectangle67 from '../../public/rectangle67.png'

// import reactLogo from '../assets/react.svg'
const Blog = () => {
  return (
    < Fragment>
      <div className='mainsection'>
        <div id="Blog">
          <div className='logo1'><img src={whitelogo} alt="" /></div>
          <div id="Text">
            <div className='all-text'>
              <div class="hi">
                <h1>
                  Hi, I am
                </h1>
              </div>
              <div class="tom">
                <h1>
                  Tomasz Gajda
                </h1>
              </div>
              <div class="front">
                <h1>
                  Front-end Developer / UI Designer
                </h1>
              </div>
            </div>
          </div>



          <li class="lin">
            <a href="">About me</a>
            <a href=""> Skills</a>
            <a href="">Portfolio</a>
            <a class="contact">CONTACT ME</a>



          </li>
          <div className='mr-dev'><img src={mrdev} alt="DEVELOPER" /></div>


          <div id="social-media">
            <div className='Vectorz'>
              <img src={Vector1} alt="Vector" />
              <img src={Vector2} alt="Vector" />
              <img src={Vector3} alt="Vector" /></div>
          </div>
          <div className='bg'><img src="" alt="" /></div>


        </div>
      </div>
<div className='mobileview'>
  <div className='menu'>
<img src={menulogo} alt="" />

  </div>
</div>
    </Fragment>
  )
}

export default Blog