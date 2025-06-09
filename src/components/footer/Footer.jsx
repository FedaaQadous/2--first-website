import React from 'react'
import './Footer.css'

function footer() {
  return (
   <footer className="footer text-center text-white">
      <div className="footer-top py-5 bg-dark">
        <div className="container">
          <div className="row">
            {/* Location */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">LOCATION</h5>
              <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>

            {/* Around the Web */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">AROUND THE WEB</h5>
              <div className="d-flex justify-content-center gap-3">
                <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="col-md-4">
              <h5 className="text-uppercase mb-3">ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created by
                
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  )
}

export default footer