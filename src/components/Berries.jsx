import React from 'react'
import './Berries.scss';
import LogoITB from '../assets/LogoITB.png'


const Berries = () => {
  return (
    <div id='mainBerry'>
    <section class="IT-Berries">


    <img src={LogoITB} alt="Logo ITB"/>


    <div>
        <h1>IT BERRIES</h1>
        <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet
            lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim
            tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a,
            dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis
            vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
            <button>READ MORE</button>
</div>

</section></div>
  )
}

export default Berries