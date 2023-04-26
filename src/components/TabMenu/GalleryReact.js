import React from "react";
import { useState } from "react";
import Portfolio from "../portfolio_categories";
import { Link } from "react-router-dom";


const GalleryReact = () => {
    const [items, setItems] = useState(Portfolio);
    const filterItem = (categortItem) => {
        const updatedItems = Portfolio.filter((currentElem) => {         
           return currentElem.category === categortItem;  
        });
        setItems(updatedItems);
    }

    return (
        <>
        <div className="menu-tabs container">
        <h2>My Portfolio</h2>
        <p>
            Below are the projects I have worked in my past using differnet PHP frameworks and frontend languages.
        </p>
        <hr />
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-secondary" onClick={() => filterItem('Wordpress')}>Wordpress</button>
                <button className="btn btn-secondary" onClick={() => filterItem('Drupal')}>Drupal</button>
                <button className="btn btn-secondary" onClick={() => filterItem('Codeigniter')}>Codeigniter</button>
                <button className="btn btn-secondary" onClick={() => filterItem('Magento')}>Magento</button>
                <button className="btn btn-secondary" onClick={() => filterItem('ExpressionEngine')}>ExpressionEngine</button>
                <button className="btn btn-secondary" onClick={() => filterItem('React')}>ReactJS/NodeJS</button>
            </div>
        </div>

        <div className="">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row">
                        {
                            items.map((elem) => {
                                const {id, name, image, description, link} = elem;

                                return (                                    
                                    <div key = {id} className="col-lg-4 col-md-4 col-sm-6 main-div ">
                                        <div className="h_gallery_item">
                                            <div className="g_img_item">
                                                <img className="img-fluid abc" src={image} alt="" />

                                            </div>
                                            <div className="g_item_text">
                                                <h4>{name}</h4>
                                                <p className="site-text">{description}</p>
                                                <Link to={link} target="_blank"><button type="button" className="btn btn-secondary">Open link</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
        </>        
      )
}

export default GalleryReact;