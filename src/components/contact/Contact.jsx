import React from 'react'
import'./Contact.css'
function Contact() {
  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <h2 className="text-uppercase fw-bold">Contact Me</h2>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="border-top border-dark w-25"></div>
          <div className="mx-3">
            <i className="fas fa-star fa-2x text-dark"></i>
          </div>
          <div className="border-top border-dark w-25"></div>
        </div>

        <form className="mx-auto contact-form" style={{ maxWidth: "600px" }}>
          <div className="custom-input">
            <input type="text" id="name" required />
            <label htmlFor="name">Full name</label>
          </div>

          <div className="custom-input">
            <input type="email" id="email" required />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="custom-input">
            <input type="text" id="phone" required />
            <label htmlFor="phone">Phone number</label>
          </div>

          <div className="custom-input">
            <textarea id="message" rows="4" required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className="btn btn-success mt-3 px-5">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact