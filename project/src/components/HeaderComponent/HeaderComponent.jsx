import "./header.scss";
// import logo2 from "./images/1-2.svg"
import logo2 from "./images/header-logo-letter.svg"

import { useEffect, useRef } from "react";

export default function HeaderComponent() {

    const headerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                headerRef.current.classList.add('sticky');
            } else {
                headerRef.current.classList.remove('sticky');
            }
        });
        return () => {
            headerRef.current.removeEventListener('scroll', () => {});
        }
    }, []);

    function scrollToElement(target) {
        const element = document.getElementById(target);
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    return (
        <div>
            <header ref={headerRef} className="header">
                <div className="logo" onClick={() => scrollToElement("intro-image-component")}>
                    <img src={logo2} alt="Innovaware" />
                    <div>roxity</div>
                </div>
                <div className="navigation">
                    <a onClick={() => scrollToElement("about-component")}>about</a>
                    {/* | */}
                    <a onClick={() => scrollToElement("services-list")}>services</a>
                    {/* | */}
                    <a onClick={() => scrollToElement("tech-domains")}>domains</a>
                </div>
                <div className="contacts">
                    {/* <a className="lng" href="/language">en
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                    </svg>
                    </a> */}
                    <a className="contact-us-btn-1" onClick={() => scrollToElement("footer-component")}>contact us</a>
                </div>
            </header>
        </div>
    );
}