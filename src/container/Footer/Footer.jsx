import React from 'react';
import {FiFacebook,FiTwitter ,FiInstagram} from 'react-icons/fi'
import { FooterOverlay , Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding '>
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
           <h1 className="app__footer-headtext">
            Contact Us
           </h1>
           <p className="p__opensans">9 W 53rd St,new York , NY 10019,USA</p>
           <p className="p__opensans">0011-2887-987</p>
           <p className="p__opensans">0011-9876-553</p>
      </div>
      <div className="app__footer-links_logo">
           <img src={images.gericht}alt="" />
            <p className="p__opensans">The best way find yourself is lose yourself in the service of other</p>
           <img src={images.spoon} alt="" className='spoon__img'style={{marginTop:15}} />
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">
            Working Hours
           </h1>
           <p className="p__opensans">Monday - Friday:</p>
           <p className="p__opensans">08:00 am - 12:00 am</p>
           <p className="p__opensans">Saturday - Sunday:</p>
           <p className="p__opensans">07:00 am - 11:00 am</p>

     
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2021 Gericht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
