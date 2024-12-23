import "./intro-image.scss";

const IntroImage = () => {

    return (
            <div className="intro-image">
                <div className="mouse-circle"></div>
                <div className="text-container">
                    <span className="span-1">
                        The best <span className="improve">IT community</span><br/>
                    </span>
                    <div className="span-2">
                        <span>
                            The <span className="improve">best solutions</span>&nbsp;for your business
                        </span>
                    </div>
                </div>
                <div className="right-part">
                    <div className="lets-talk">
                        <a href="/contact">Let's talk</a>
                    </div>
                </div>
            </div>
    );
};

export default IntroImage;