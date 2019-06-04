import React from 'react';

import './app.css';

import YellowEggImage from "../EggYellowSmall.png"

export default function PageNotFound() {
  
  return (
    <div>
      <h2>Page Not Found</h2>
        <p>Oh no!  This page is not found.</p>
        <section className="section-class">
          <h4>Still need to draw a confused dragon for this page</h4>
          <img 
            src={YellowEggImage} 
            className="image-css" 
            alt="Yellow Dragon Egg" 
          />
        </section>
    </div>
  )
}