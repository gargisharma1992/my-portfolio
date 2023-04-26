import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer_area">      
          <div className="container">      
            <div className="quick-links"> 
              <p> <Link  to = "/" target="_blank">Home</Link> | </p>
              <p> <Link  to = "/about" target="_blank">About me</Link> | </p>
              <p> <Link  to = "/portfolio" target="_blank">Porfolio</Link> | </p>
              <p> <Link to = "/contact" target="_blank">Contact</Link></p>
            </div>

            <div className="social-links-list"> 
              <h6>Social Links</h6>
              <Link target="_blank "to="https://github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
              <Link target="_blank "to="https://linkedin.com//in/gargi-sharma/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link>
              <Link target="_blank "to="https://www.youtube.com/channel/UCtK3ehEW8xlzyyn1CkgtMHw"><FontAwesomeIcon icon={faYoutube} size="2x" /></Link>
            </div>
          </div>
      </footer>
    </>        
  )
}
export default Footer;