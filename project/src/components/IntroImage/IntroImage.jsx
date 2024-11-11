import "./intro-image.scss";
import IntroVideo from "./media/9999.mp4";
// import Link from 

const IntroImage = () => {
    return (
            <div className="intro-image">
                <div className="text-container">
                Global software development<br/>
                Innovation and technology<br/>
                Best practices and solutions
                </div>
                <div className="right-part">
                    <div className="lets-talk">
                        <a href="/contact">Let's talk</a>
                    </div>
                    <video className='VideoTag' autoPlay muted>
                        <source src={IntroVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
    );
};

export default IntroImage;