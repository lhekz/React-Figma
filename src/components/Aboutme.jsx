import React from 'react'
import './Aboutme.scss'
import seperator1 from '../../public/seperator1.svg'
import seperator2 from '../../public/seperator2.svg'
import maintainance from '../../public/maintainance-icon.svg'
import development from '../../public/development-icon.svg'
import design from '../../public/design-icon.svg'
const Aboutme = () => {
    return (
        <div id='Aboutme' >

            {/* <section class="about-me"> */}
            <div class="about-me">
                <h1>ABOUT ME</h1>
                <p> Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem
                    sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p></div>


            <div class="General">

                <div class="Explore">
                    <button>EXPLORE</button>
                </div>
                {/* <!-- <div> <img class="line-9" src=" ./images/line 9.svg" alt="line 9"> -->
<!-- <img class="line-10" src="./images/line 10.svg" alt="line 10"></div> --> */}



                <img class="seperator" src={seperator1} alt="Seperator" />

            </div>
            <div id='services'>
                <div class="servi-1">
                    <h2>DESIGN</h2>
                    <img src={design} alt="serv-logo1" />
                    <h6>I can design the site based on your needs and suggestions. I can also design the site from scratch
                        and consult you during the job.</h6>
                </div>

                <div class="servi-2">
                    <h2>DEVELOPMENT</h2>
                    <img src={development} alt="serv-logo1" />
                    <h6>I can design the site based on your needs and suggestions. I can also design the site from scratch
                        and consult you during the job..</h6>
                </div>
                <div class="servi-3">
                    <h2>MAINTENANCE</h2>
                    <img src={maintainance} alt="serv-logo2" />
                    <h6>I can design the site based on your needs and suggestions. I can also design the site from scratch
                        and consult you during the job..</h6>
                </div>

                <img class="seperator2" src={seperator2} alt="seperatorBlack2"></img>

                <div class="skills">
                    <h2>
                        SKILLS
                    </h2>


                </div>


            </div>




        </div>






    )
}

export default Aboutme