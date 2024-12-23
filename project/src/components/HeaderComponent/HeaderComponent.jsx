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

    return (
        <div>
            <header ref={headerRef} className="header">
                <div className="logo">
                    <img src={logo2} alt="Innovaware" />
                    <h2>roxity</h2>
                </div>
                <div className="navigation">
                    <a href="/about">about us</a>
                    {/* | */}
                    <a href="/services">services</a>
                    {/* | */}
                    <a href="/domains">domains</a>
                    {/* | */}
                    {/* <a href="/industries">industries</a> */}
                    {/* <a href="/portfolio">portfolio</a> */}
                </div>
                <div className="contacts">
                    <a className="lng" href="/language">Global(EN)
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                    </svg>
                    </a>
                    <a className="contact-us-btn-1" href="/contact">contact us</a>
                </div>
            </header>
        </div>
    );
}