import React from 'react'
import  './Hero.css'

function hero() {
  return (
 
    
    <div className='hero text-white text-center d-flex flex-column justify-content-center align-items-center'>
           <img src="avatar.svg"  alt="heroimg" className="img mb-3" 
        
      />
           <h1>Start Bootstrap</h1>
          <i className="fas fa-star fa-2x"></i>
       <h6>Graphic Artist - Web Designer - Illustrator</h6>
    </div>

  )
}

export default hero