import "./services.scss";

import { useState } from 'react';

const ServicesListComponent = () => {

    const [services, setServices] = useState("Web development");

    const changeServices = (e) => {
        // setServices(e.target.value);
    }

    return (
        <div className="services-list">
            <div className="title">
                <h2>Services</h2>
            </div>
            <div className="container">
                <div className="service-names-container">
                    <div className="service-names">
                        <div className="service-name">
                            <input type="submit" value="Web development" onChange={changeServices} />
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="SEO and statistics collection" onChange={changeServices} />
                            {/* <a>Mobile development</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="UI and UX design" onChange={changeServices} />
                            {/* <a>Software development</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="QA and software testing" onChange={changeServices} />
                            {/* <a>IT consulting</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="Devops" onChange={changeServices} />  
                            {/* <a>Web development</a> */}
                        </div>
                    </div>
                </div>
                <div className="service-description-container">
                    <div className="service-description">
                        <div className="service-name">
                            <h3>Web development</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/web-development/full-stack">
                                        <h4>Full stack</h4>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/web-development/backend">
                                        <h4>Backend</h4>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/web-development/fronend">
                                        <h4>Frontend</h4>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/web-development/mobile">
                                        <h4>Mobile</h4>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesListComponent;