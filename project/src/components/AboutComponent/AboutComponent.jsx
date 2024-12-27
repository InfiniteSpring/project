import "./about.scss";

import bg_who_we_are from "./images/bg_1.png";

import { useState, useEffect } from 'react';

const AboutComponent = () => {

    const [currentabout, setCurrentabout] = useState("Who we are");

    const equality = {
        "Who we are": "who-we-are",
        "How we work": "how-we-work",
        "Our team": "our-team",
    }

    const changeabouts = (e) => {
        if (e.target.value !== currentabout) {
            document.getElementById(`inp-${equality[currentabout]}`).classList.remove("active-option-input1");
            document.getElementById(`inp-${equality[e.target.value]}`).classList.add("active-option-input1");
            document.getElementById(equality[currentabout]).style.opacity = 0;
            setTimeout(() => {
                document.getElementById(equality[currentabout]).style.display = "none";
                document.getElementById(equality[e.target.value]).style.display = "block";
                setTimeout(() => {
                    document.getElementById(equality[e.target.value]).style.opacity = 1;
                    setCurrentabout(e.target.value);
                }, 10);
            }, 290);
        }
    }

    return (
        <div className="about-container">
            <div className="title">
                <h2>About</h2>
            </div>
            <div className="container">
                <div className="about-description-container">
                    <div id="who-we-are" className="about-description descr-visible">
                        {/* <div className="about-name">
                            <h3>Who we are</h3>
                        </div>
                        <div className="options-container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit eum officiis, et minus quisquam quaerat asperiores qui reprehenderit alias! Ad, distinctio veritatis quia doloremque provident dolorum! Nostrum, qui modi.
                        </div> */}
                        {/* <img src={bg_who_we_are} alt="" /> */}
                    </div>
                    <div id="how-we-work" className="about-description">
                        <div className="about-name">
                            <h3>How we work</h3>
                        </div>
                        <div className="options-container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt consequatur est quaerat nobis deserunt at neque, commodi aliquam ratione dolores. Sequi exercitationem, aut porro hic corrupti nemo quos deleniti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aperiam explicabo earum provident amet atque doloribus porro dicta. Reiciendis sapiente sunt repellat quos consequuntur accusamus ad, facere odit cum adipisci!
                        </div>
                    </div>
                    <div id="our-team" className="about-description">
                        <div className="about-name">
                            <h3>Our team</h3>
                        </div>
                        <div className="options-container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt consequatur est quaerat nobis deserunt at neque, commodi aliquam ratione dolores. Sequi exercitationem, aut porro hic corrupti nemo quos deleniti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aperiam explicabo earum provident amet atque doloribus porro dicta. Reiciendis sapiente sunt repellat quos consequuntur accusamus ad, facere odit cum adipisci!
                        </div>
                    </div>
                    
                </div>
                <div className="about-options-container">
                    <div className="about-options">
                        <div className="about-option">
                            <input className="active-option-input1" id="inp-who-we-are" type="submit" value="Who we are" onClick={changeabouts} />
                        </div><br/>
                        <div className="about-option">
                            <input id="inp-how-we-work" type="submit" value="How we work" onClick={changeabouts} />
                        </div><br/>
                        <div className="about-option">
                            <input id="inp-our-team" type="submit" value="Our team" onClick={changeabouts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;