import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images ,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits you palatte' />
       <h1 className="headtext__cormorant">Today Special Menu</h1> 
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__spcialMenu-menu_juse">
        <p className="app__specialMenu-menu_heading">Juse</p>
        <div className="app__specialMenu-menu_items">
          {
            data.wines.map((wine , index) =>(
               <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))
          }
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>
       
      <div className="app__spcialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">cocktails</p>
        <div className="app__specialMenu-menu_items">
          {
            data.cocktails.map((cocktail , index) =>(
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))
          }
        </div>
      </div>

    </div>
    <div style={{marginTop:'15px'}}>
      <button className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
