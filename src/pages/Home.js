
import React from "react";
import ProfileImage from "../assets/images/ProfileImage.jpg";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import '../assets/style.css';
const Home = () => {
    return (
        <>
		<section className="home_banner_area">
           	<div className="container box_1620">
           		<div className="banner_inner d-flex align-items-center">
					<div className="banner_content">
						<div className="row welcome_inner">
							<div className="col-lg-6">
								<div className="welcome_text">
								<div className="d-flex">
										<img src={ProfileImage} alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="media-body">
									<div className="personal_text">
										<h6>Hello Everybody, i am</h6>
										<h3>Gargi Sharma</h3>
										<h4>FULL STACK WEB DEVELOPER</h4>
										<p>Dedicated Web developer with over 6 years of experience in Web developement and testing. Strong creative and analytical skills. Proven experience developing consumer-focused websites using HTML, CSS, PHP, JavaScript, Ajax, NodeJs, React and other development Languages. Good knowledge of the best practices for web design, user experience, and speed.</p>

										<ul className="list personal_social">
											<li><Link target="_blank "to="https://github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></Link></li>
											<li><Link target="_blank "to="https://linkedin.com//in/gargi-sharma/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link></li>
											<li><Link target="_blank "to="https://www.youtube.com/channel/UCtK3ehEW8xlzyyn1CkgtMHw"><FontAwesomeIcon icon={faYoutube} size="2x" /></Link></li>
										</ul>		
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </section>
	
		<Footer />
        </>        
      )
}

export default Home;
