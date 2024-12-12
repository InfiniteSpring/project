import './industries.scss';

import ecom_image from "./images/bg_img_1.jpg"
import education_image from "./images/bg_img_2.jpg"
import healthcare_image from "./images/bg_img_5.jpg"
import finance_image from "./images/bg_img_3.jpg"
import logistics_image from "./images/bg_img_4.png"

import { useEffect, useRef, useState } from "react";

export default function IndustriesComponent() {
    return (
        <div className='industries-container'>
            <div className="industries-wrapper">
                <div className="industries-title">
                    <h1>Industries</h1>
                </div>
                <div className="industries-content">
                    <div className="wrapper">
                        <div className="item">
                            <div className="ecommerce-item">
                                <div className="ecommerce-item-content">
                                    <h2>E-commerce</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</p>
                                </div>
                                <div className="img-wrap">
                                    <img src={ecom_image} alt="ecommerce" />
                                </div>
                            </div>
                        </div>  
                        <div className="item">
                            <div className="finance-item">
                                <div className="finance-item-content">
                                    <h2>Finance</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</p>
                                </div>
                                <img src={finance_image} alt="finance" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="education-item">
                                <div className="education-item-content">
                                    <h2>Education</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</p>
                                </div>
                                <img src={education_image} alt="education" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="logistics-item">
                                <div className="logistics-item-content">
                                    <h2>Logistics</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</p>
                                </div>
                                <img src={logistics_image} alt="logistics" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="healthcare-item">
                                <img src={healthcare_image} alt="healthcare" />
                                <div className="healthcare-item-content">
                                    <h2>Healthcare</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}