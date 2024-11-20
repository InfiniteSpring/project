import "./services.scss";

import { useState, useEffect } from 'react';

const ServicesListComponent = () => {

    const [currentService, setCurrentService] = useState("Software development");

    const equality = {
        "Software development": "software-development",
        "Analisys and promotion": "analisys-and-promotion",
        "Design": "design",
        "Quality assurance": "quality-assurance",
        "Devops": "devops"
    }

    const changeServices = (e) => {
        if (e.target.value !== currentService) {
            document.getElementById(equality[currentService]).style.opacity = 0;
            setTimeout(() => {
                document.getElementById(equality[currentService]).style.display = "none";
                document.getElementById(equality[e.target.value]).style.display = "block";
                setTimeout(() => {
                    document.getElementById(equality[e.target.value]).style.opacity = 1;
                    setCurrentService(e.target.value);
                }, 10);
            }, 290);
        }
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
                            <input type="submit" value="Software development" onClick={changeServices} />
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="Analisys and promotion" onClick={changeServices} />
                            {/* <a>Mobile development</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="Design" onClick={changeServices} />
                            {/* <a>Software development</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="Quality assurance" onClick={changeServices} />
                            {/* <a>IT consulting</a> */}
                        </div><br/>
                        <div className="service-name">
                            <input type="submit" value="Devops" onClick={changeServices} />  
                            {/* <a>Web development</a> */}
                        </div>
                    </div>
                </div>
                <div className="service-description-container">
                    <div id="software-development" className="service-description descr-visible">
                    {/* <div className="service-description" style={{display: currentService === "Software development" ? "block" : "none", opacity: currentService === "Software development" ? 1 : 0.2}}> */}
                        <div className="service-name">
                            <h3>Software development</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/full-stack">
                                        <h4>Full stack</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/backend">
                                        <h4>Backend</h4>
                                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/fronend">
                                        <h4>Frontend</h4>
                                        <div>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/mobile">
                                        <h4>Mobile</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="analisys-and-promotion" className="service-description">
                    {/* <div className="service-description" style={{opacity: currentService === "Analisys and promotion" ? 1 : 0, display: currentService === "Analisys and promotion" ? "block" : "none"}}> */}
                        <div className="service-name">
                            <h3>Analisys and promotion</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/seo">
                                        <h4>SEO</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/statistics">
                                        <h4>Statistics</h4>
                                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/analytics">
                                        <h4>Analytics</h4>
                                        <div>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/promotion">
                                        <h4>Promotion</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="design" className="service-description">
                    {/* <div className="service-description" style={{opacity: currentService === "Design" ? 1 : 0, display: currentService === "Design" ? "block" : "none"}}> */}
                        <div className="service-name">
                            <h3>Design</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/web-design">
                                        <h4>Web design</h4>
                                        <div>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/ui-and-ux">
                                        <h4>UI and UX</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/motion-graphics">
                                        <h4>Motion graphics</h4>
                                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/advertising-and-marketing">
                                        <h4>Advertising and marketing</h4>
                                        <div>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="quality-assurance" className="service-description">
                    {/* <div className="service-description" style={{opacity: currentService === "Quality assurance" ? 1 : 0, display: currentService === "Quality assurance" ? "block" : "none"}}> */}
                        <div className="service-name">
                            <h3>Quality assurance</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/software-testing">
                                        <h4>Software testing</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/ui-testing">
                                        <h4>UI testing</h4>
                                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/mobile-testing">
                                        <h4>Mobile testing</h4>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/code-review">
                                        <h4>Code review</h4>
                                        <div>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="devops" className="service-description">
                    {/* <div className="service-description" style={{opacity: currentService === "Devops" ? 1 : 0, display: currentService === "Devops" ? "block" : "none"}}> */}
                        <div className="service-name">
                            <h3>Devops</h3>
                        </div>
                        <div className="options-container">
                            <div className="big-option">
                                <div className="option-btn">
                                    <a href="/devops">
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </a>
                                </div>
                            </div>
                            <div className="option-underline"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesListComponent;