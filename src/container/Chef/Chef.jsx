import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Chef Word'/>
      <h1 className='headtext__cormorant'>What we blieve in</h1>
    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="" />
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit.tenetur odio maxime ratione architecto</p>
      </div>
      <p className="p__opensans">Lorem ipsum dolor sit, est deleniti sequi doloribus odit. Ad omnis, corrupti architecto repudiandae sapiente placeat modi nam perspiciatis quos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit facere sit impedit blanditiis incidunt aut temporibus nemo dolorum officia laboriosam maxime sequi, quo quae corrupti eligendi ipsam consectetur fuga! Officia.</p>
      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
    </div>

  </div>
);

export default Chef;
