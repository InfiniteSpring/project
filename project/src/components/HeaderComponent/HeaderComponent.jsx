import "./header.scss";
// import logo from "./images/main-logo.png";
import logo from "./images/logo.png";

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
                    <img src={logo} alt="Innovaware" />
                    <h2>Proxity</h2>
                </div>
                <div className="navigation">
                    <a href="/about">about us</a>
                    <a href="/services">services</a>
                    <a href="/domains">domains</a>
                    <a href="/industries">industries</a>
                    {/* <a href="/portfolio">portfolio</a> */}
                    <a className="contact-us-btn" href="/contact">contact us</a>
                </div>
            </header>
        </div>
    );
}