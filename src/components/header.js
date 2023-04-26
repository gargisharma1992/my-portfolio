import {React, useState} from "react";
import { Link } from "react-router-dom";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../assets/style.css';







const Header = () => {
 
    return (
        <>
        
       
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                   
                   

             
                    <div className="container-fluid">
                        <div >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item"><Link className="nav-link active" to = "/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to = "/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to = "/portfolio">Porfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" to = "/contact">Contact</Link></li>
                                
                               
                            </ul>
                        </div>
                    </div>
                </nav>

                
          
            </div>
        </header>
        </>

    );
}


export default Header;