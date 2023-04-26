import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const About = () => {
    return (
		<>
			<div className="title-heading">
				<h2>ABOUT MYSELF</h2>
			</div>
			<section className="welcome_area p_120">
				<div class="container">
					<div class="row about-text ">
						<p>My name is <b>Gargi Sharma</b>. Originally, I am from India and completed my Masters from Chitkara University, Punjab, India. After completing my studies, I worked as a PHP developer in a consulting company. After getting 2 years of experience, I moved to Canada for my further Studies. </p>
						<p>In 2017, I arrived Canada on a study permit and started my studies in Concordia University, Montreal. I learned and worked on many projects in different languages which was the part of my Curriculum.</p>

						<p>In May 2019, I graduated from Concordia University in  Masters of Software Engineering and started my career journey in Canadian IT companies.</p>

						<p> Now, Its over 6 years I am working as a Web developer where I have worked on different projects using backend and frontend technolgioes and continuing to upgrade my skills. 5+ years of web development experience includes Design and Development, Debugging, SEO and Testing. Some of the projects are listed on my Porfolio page.</p>
					</div>

					<div className="row portfolio">
						<button className="portfolio-text"><Link to="/portfolio" target="_blank">Click here to see all Projects</Link> </button>
					</div>
				</div>
			</section>	
			<Footer />
		</>        
    )
}

export default About;