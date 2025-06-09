import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
  

<div  class="portfolio">
        <h2>PORTFOLIO</h2>
        <i class="fas fa-star m-3"></i>
        <div class="photo">
            <div class="portfolio-item">
                <img src="cabin.png" alt="cabin photo" titel="image"/>
                <img src="cake.png"  alt="cake photo" titel="image"/>
                <img src="circus.png" alt="circus photo" titel="image"/>
            </div>
            <div class="portfolio-item">
                <img src="game.png" alt="game photo" titel="image"/>
                <img src="safe.png" alt="safe photo" titel="image"/>
                <img src="submarine.png" alt="submarine photo" titel="image"/>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
