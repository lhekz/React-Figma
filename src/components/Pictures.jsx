import React from 'react'
import './pictures.scss'
import pict1 from '../assets/pict1.png'
import pict2 from '../assets/pict2.png'
import pict3 from '../assets/pict3.png'
import pict4 from '../assets/pict4.png'
import pict5 from '../assets/pict5.png'
import pict6 from '../assets/pict6.png'
import seperatorBlack2 from '../assets/seperatorBlack2.svg'

const Pictures = () => {
    return (
        <div id='main-pict'>
            <div className='Pictures' >


                <div className="pics-items">
                    <img src={pict1} alt="pict1" />
                    <div>
                        <div className='picture-txt'>

                            <div className='txt1'> <h3>coded, designed</h3></div>
                            <div className='txt2'> <h3>eatsome.</h3></div>
                            <div className='txt3'> <h3>Restaurant browsing in React.js (Using Yelp API)</h3></div>
                            <div className='gen-btn'><div className='btn-one'><button>DEMO</button></div>  <div className='btn-two'> <button>MORE</button></div></div>

                        </div>
                        <img src={pict2} alt="pict2" /></div>
                    <img src={pict3} alt="pict2" />
                    <img src={pict4} alt="pict4" />
                    <img src={pict5} alt="pict5" />
                    <img src={pict6} alt="pict6" />

                </div>






            </div>


            <div className='extrabg'>
                <div className='extra'><h3>And many more to come!</h3></div>
            </div>


            <div className='contactbg'>
                <div className='contact'>
                    <h3>
                        CONTACT
                    </h3>
                </div>
                <div className='para'>
                    <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit
                        amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
                    </p>
                </div>
                <div class="seperator4"><img src={seperatorBlack2} alt="seperator4" /></div>



            </div>
            <div className='all-btn-sect-bg'>
            <div className='all-btn-sect'>
                <div className='three-btn'>
                    <button>ENTER YOUR NAME*</button>
                    <button>ENTER YOUR EMAIL*</button>
                    <div className='shorter-btn'><button>PHONE NUMBER</button></div></div>
                <div className='one-btn'><button>YOUR MESSAGE*</button></div>
            </div>
            
            </div>
            <div className='submitbg'>
 <section class="submit">
          
         <button>   SUBMIT</button></section></div>
            
        </div>
    )
}
export default Pictures