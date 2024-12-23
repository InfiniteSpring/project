import "./about.scss";
import bg_1 from "./images/bg_img_1.jpg";
import bg_2 from "./images/bg_img_2.jpg";
import bg_3 from "./images/bg_img_3.jpg";
import bg_4 from "./images/bg_img_4.png";
import bg_5 from "./images/bg_img_5.jpg";

export default function AboutComponent() {

    return (
        <div className="about-container">
            <div className="container">
                <div className="content-container">
                    <div className="content">
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="title-links-container">
                    <div className="title">
                        <h2>About</h2>
                    </div>
                    <div className="links">
                        <a href="#">Who we are</a>
                        <a href="#">How we work</a>
                        <a href="#">Our team</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
