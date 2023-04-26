import React from "react";
import Footer from "../components/Footer";
const Contact = () => {
    return (
        <>
        <div className="title-heading">
          <h2>Feel free to Contact me</h2>
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719091.4235620833!2d-76.36067921923382!3d45.24878617735624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1682009731678!5m2!1sen!2sca" 
        width="100%"
        height="400"
        style={{border:0}} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
          <section className="welcome_area p_120">
            <div className="container">
              <h2 className="contact-heading">Contact Form</h2>
              <div className="contact-form" >

                <form action="https://formspree.io/f/myyalwwk" method="POST">
                  <div className="form-group">
                    <input type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    required />
                  </div>
                  <div className="form-group">
                    <textarea  className="form-control"
                    name="message"
                    placeholder="Enter your message"
                    autoComplete="off" 
                    required />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </section>
        <Footer />
        </>        
      )
}

export default Contact;