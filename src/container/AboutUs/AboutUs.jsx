import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon}alt="spoon" className='spoon__img'/>
        <p className="p__opensans">hwvqv hwgvytwv uyvytvfwd uyvytvytvdw hvyuvytvwd hvyvytvwh</p>
         <button className="custom__button">Know Moer</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our Histoty</h1>
        <img src={images.spoon}alt="spoon" className='spoon__img'/>
        <p className="p__opensans">hwvqv hwgvytwv uyvytvfwd uyvytvytvdw hvyuvytvwd hvyvytvwh</p>
         <button className="custom__button">Know Moer</button>
      </div>
  
  </div>
  </div>
);

export default AboutUs;
