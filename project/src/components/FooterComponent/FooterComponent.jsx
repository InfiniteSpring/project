import "./footer.scss";
import { useState } from "react";

export default function FooterComponent() {

    const [isName, setIsName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isSummary, setIsSummary] = useState("");

    const changeName = (e) => {
        setIsName(e.target.value);
    }

    const changeEmail = (e) => {
        setIsEmail(e.target.value);
    }

    const changeSummary = (e) => {
        setIsSummary(e.target.value);
    }


    return (
        <div>
            <footer>
                <div className="links">
                    <div className="contact-container">
                        <div className="make-order">
                            <h2>Make an order</h2>
                            <p>We are ready to help you with your project</p>
                            <form className="send-order-form">
                                <div className="inputs">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={changeName}
                                        value={isName}
                                    /><br/>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={changeEmail}
                                        value={isEmail}
                                    /><br/>
                                    <input
                                        type="text"
                                        name="summary"
                                        id="summary"
                                        placeholder="Summary"
                                        onChange={changeSummary}
                                        value={isSummary}
                                    /><br/> 
                                </div>
                                <p>Just send an order and we will contact you soon</p>
                                <button type="submit">Send order</button>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="services link-container-block">
                            <div className="link-container-block-title">
                            Services
                            </div><br/>
                            <div className="service-link">
                            <a href="#">Web development</a>
                            </div><br/>
                            <div className="service-link">
                            <a href="#">SEO and statistics collection</a>
                            </div><br/>
                            <div className="service-link">
                            <a href="#">UI and UX design</a>
                            </div><br/>
                            <div className="service-link">
                            <a href="#">QA and software testing</a>
                            </div><br/>
                            <div className="service-link">
                            <a href="#">Devops</a>
                            </div><br/>
                        </div>
                        <div className="technologies link-container-block">
                            <div className="link-container-block-title">
                            Domains
                            </div><br/>
                            <div className="technologies-link">
                            <a href="#">Web development</a>
                            </div><br/>
                            <div className="technologies-link">
                            <a href="#">Big data</a>
                            </div><br/>
                            <div className="technologies-link">
                            <a href="#">Data analysis</a>
                            </div><br/>
                            <div className="technologies-link">
                            <a href="#">Machine learning</a>
                            </div><br/>
                            <div className="technologies-link">
                            <a href="#">Artificial intelligence</a>
                            </div><br/>
                        </div>
                        <div className="industries link-container-block">
                            <div className="link-container-block-title">
                            Industries
                            </div><br/>
                            <div className="industries-link">
                            <a href="#">Healthcare</a>
                            </div><br/>
                            <div className="industries-link">
                            <a href="#">Finance</a>
                            </div><br/>
                            <div className="industries-link">
                            <a href="#">eCommerce</a>
                            </div><br/>
                            <div className="industries-link">
                            <a href="#">Education</a>
                            </div><br/>
                            <div className="industries-link">
                            <a href="#">Logistics</a>
                            </div><br/>
                        </div>
                        <div className="about link-container-block">
                            <div className="link-container-block-title">
                            About
                            </div><br/>
                            <div className="about-link">
                            <a href="#">Who we are</a>
                            </div><br/>
                            <div className="about-link">
                            <a href="#">How we work</a>
                            </div><br/>
                            <div className="about-link">
                            <a href="#">Technologies</a>
                            </div><br/>
                            <div className="about-link">
                            <a href="#">Blog</a>
                            </div><br/>
                            <div className="about-link">
                            <a href="#">Partnership</a>
                            </div><br/>
                        </div>
                    </div>
                </div>
                <div className="copy-contacts">
                    <div className="copywrite">
                        <div className="footer-logo">
                        Innovaware
                        </div>
                        <div className="copytext">
                        &copy; 2024 Innovaware. All Rights Reserved.
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="email">
                        innovaware@gmail.com
                        </div>
                        <div className="xtwitter">
                        @Innovaware Twitter
                        </div>
                        <div className="linkedin">
                        @Innovaware Linkedin
                        </div>
                        <div className="telegram">
                        @Innovaware
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}   