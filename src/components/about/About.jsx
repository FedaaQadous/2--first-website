import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className=" text-white  text-center">
      <div className="container">
        <h2 className=" fw-bold">About</h2>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="border-top border-white "></div>
          <div className="mx-3">
            <i className="fas fa-star fa-2x"></i>
          </div>
          <div className="border-top border-white "></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The
              download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              You can create your own custom avatar for the masthead, change the icon
              in the dividers, and add your email address to the contact form to make
              it fully functional!
            </p>
          </div>
        </div>
        <a href="#" className="btn btn-outline-light mt-4">
          <i className="fas fa-download me-2"></i>Free Download!
        </a>
      </div>
    </section>
    
  )
}

export default About