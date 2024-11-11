import "./header.scss";
import logo from "./images/main-logo.png";

export default function HeaderComponent() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="Innovaware" />
                </div>
                <div className="navigation">
                    <a href="/about">about us</a>
                    <a href="/services">services</a>
                    <a href="/technologies">technologies</a>
                    <a href="/industries">industries</a>
                    <a href="/portfolio">portfolio</a>
                    <a className="contact-us-btn" href="/contact">contact us</a>
                </div>
                </header>
        </div>
    );
}