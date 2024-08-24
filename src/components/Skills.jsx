import React from 'react'
import './Skills.scss';
import HTML5 from '../assets/HTML5.svg';
import SASS from '../assets/SASS.svg';
import JAVASCRIPT from '../assets/JAVASCRIPT.svg';
import GIT from '../assets/GIT.svg';
import FIGMA from '../assets/FIGMA.svg';
import CSS3 from '../assets/CSS3.svg';
import REACTcopy from '../assets/REACTcopy.svg';
import NODE from '../assets/NODEJS.svg';
import MYSQL from '../assets/MYSQL.svg';
import MONGODB from '../assets/MONGODB.svg';
import BOOTSTRAP from '../assets/BOOTSTRAP.svg';
import TYPESCRIPT from '../assets/TYPESCRIPT.svg';
import ANGIELSKI from '../assets/ANGIELSKI.svg';
import HISZPANSKI from '../assets/HISZPANSKI.svg';
import portfoliobg from '../assets/portfoliobg.png';

import CCC from '../assets/CCC.svg';


const Skills = () => {


    return (

        <section id="tech-skills">

<div class="Using">
                <h1>USING NOW:</h1>
            </div>

            <div class="tech1">



                <div className='HTML5'> <img src={HTML5} alt="Html5" />
                    <h3>HTML5</h3>
                </div>

                <div className='CSS3'><img src={CSS3} alt="CSS3" />
                    <h3>CSS3</h3>
                </div>

                <div className='SASS'><img src={SASS} alt="SASS" />
                    <h3>SASS</h3>
                </div>
                <div className='javascript'><img src={JAVASCRIPT} alt="Javascript" />
                    <h3>JAVASCRIPT</h3>
                </div>

            </div>


            <div class="tech2">
                <div><img src={REACTcopy} alt="REACT" />
                    <h3>REACT</h3>
                </div>


                <div><img class="Boostrap" src={BOOTSTRAP} alt="Boostrap" />
                    <h3>BOOTSTRAP</h3>
                </div>
                <div><img src={GIT} alt="Git" />
                    <h3>GIT</h3>
                </div>
                <div ><img class="Figma" src={FIGMA} alt="Figma" />
                    <h3>FIGMA</h3>
                </div>
            </div>


            <div className='Learn'>
                    <h3>
                        LEARNING:
                    </h3>
                </div>

                <div class="tech3">
                <div><img src={NODE} alt="NODE" />
                    <h3>NODE</h3>
                </div>


                <div><img class="MYSQL" src={MYSQL} alt="MYSQL" />
                    <h3>MYSQL</h3>
                </div>
                
                <div><img src={MONGODB} alt="MONGODB" />
                    <h3>MONGODB</h3>
                </div>
                <div ><img class="TYPESCRIPT" src={TYPESCRIPT} alt="TYPESCRIPT" />
                    <h3>TYPESCRIPT</h3>
                </div>
            </div>

            <div class="other-s">
                    <h3>
                        OTHER SKILLS:
                    </h3>
                </div>

                <div class="tech4">
                <div><img src={ANGIELSKI} alt="ANGIELSKI" />
                    <h3>ANGIELSKI C1/C2</h3>
                </div>


                <div><img class="HISZPAŃSKI" src={HISZPANSKI} alt="HISZPAŃSKI B1/B2" />
                    <h3>HISZPAŃSKI B1/B2</h3>
                </div>
                <div><img src={CCC} alt="C++" />
                    <h3>C++</h3>
                </div>
                <div ><img class="Figma" src={FIGMA} alt="Figma" />
                    <h3>FIGMA</h3>
                </div>
              
            </div>
  <div className='portfoliobg'><img src={portfoliobg} alt="" />
  <h3>PORTFOLIO</h3>
  </div>

<div className='blackbg'><div className='all-coded-design'>

    <div className='All'><h2>ALL</h2></div>
    <h2>CODED</h2>
    <h2>DESIGNED</h2>
</div></div>
        </section>


    )

    
}

export default Skills