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
                                    <a href="/software-development/backend">
                                        <h4>Backend</h4>
                                        <div>   Backend development handles the server-side of applications, including database interactions and logic, using languages like Python, Java, or Ruby.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/fronend">
                                        <h4>Frontend</h4>
                                        <div>   Frontend development focuses on creating the visual part of web applications that users interact with, involving HTML, CSS, and JavaScript for intuitive interfaces.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/mobile">
                                        <h4>Mobile</h4>
                                        <div>   Mobile development creates applications for platforms like iOS and Android, using Swift and Kotlin to ensure great functionality on different devices</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/software-development/full-stack">
                                        <h4>Specific</h4>
                                        <div>   Specific software development focuses on creating tailored solutions to meet unique client needs, often involving custom applications and systems that enhance business processes and efficiency</div>
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
                                        <div> SEO (Search Engine Optimization) focuses on improving the visibility of websites in search engines by using strategies and techniques to attract organic traffic.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/statistics">
                                        <h4>Statistics</h4>
                                        <div>Statistics involves the collection, analysis, and interpretation of data, allowing for informed business decisions and trend identification</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/analytics">
                                        <h4>Analytics</h4>
                                        <div>Analytics provides opportunities to study and evaluate data, enabling companies to track performance and optimize strategies.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/analysis-and-promotion/promotion">
                                        <h4>Promotion</h4>
                                        <div>Promotion encompasses various methods and tools to increase brand awareness and attract customers through advertising, content, and social media.</div>
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
                                        <div>Web design involves creating visually appealing and functional websites, focusing on layout, color schemes, typography, and overall aesthetics to enhance user experience.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/ui-and-ux">
                                        <h4>UI and UX</h4>
                                        <div>UI (User Interface) and UX (User Experience) design focus on the interaction between users and digital products. UI design is about creating intuitive and attractive interfaces, while UX design focuses on optimizing user journeys and satisfaction.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/motion-graphics">
                                        <h4>Motion graphics</h4>
                                        <div>Motion graphics are animated visuals that combine graphic design and animation techniques to create engaging and dynamic content for digital media, enhancing storytelling and brand messaging.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/design/advertising-and-marketing">
                                        <h4>Advertising and marketing</h4>
                                        <div>Advertising and marketing encompass strategies aimed at promoting products or services to target audiences through various channels, including digital, print, social media, and more, to drive brand awareness and sales.</div>
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
                                        <div>Software testing involves the systematic evaluation of software applications to identify defects and ensure that they meet specified requirements. This process aims to ensure quality, performance, and reliability before deployment.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/ui-testing">
                                        <h4>UI testing</h4>
                                        <div>UI testing focuses on verifying the user interface of an application to ensure it is visually correct and functions as intended. This includes checking elements like layout, buttons, and responsiveness across different devices.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/mobile-testing">
                                        <h4>Mobile testing</h4>
                                        <div>Mobile testing is the process of testing mobile applications across various devices and platforms to ensure functionality, usability, and performance. It helps identify issues related to compatibility and user experience on mobile devices.</div>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/quality-assurance/code-review">
                                        <h4>Code review</h4>
                                        <div>Code review is a systematic examination of source code by developers to identify bugs, improve code quality, and ensure adherence to coding standards. This process promotes collaboration and knowledge sharing within the development team.</div>
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
                                        <div>&emsp; DevOps is a set of practices that integrates software development (Dev) and IT operations (Ops) to shorten the software development lifecycle. Its primary goal is to enhance deployment frequency, improve software quality, and reduce the time required to recover from failures. By fostering a culture of collaboration and automation, DevOps allows teams to respond quickly to market changes.<br/><br/><br/>
                                            &emsp; Key principles of DevOps include continuous integration (CI) and continuous delivery (CD). CI involves automatically testing and integrating code changes, while CD automates the deployment process, enabling more frequent updates. Monitoring and feedback are also crucial, as they provide insights into application performance and user behavior, helping teams to identify and resolve issues swiftly.<br/><br/><br/>
                                            &emsp; Ultimately, DevOps is a cultural shift that emphasizes communication and collaboration across teams. By breaking down silos and adopting relevant tools and practices, organizations can enhance agility, deliver high-quality software more efficiently, and remain competitive in today’s fast-paced digital landscape.</div>
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