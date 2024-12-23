import './contactus.scss';

export default function ContactUsComponent() {
    return (
        <div className="contact-us-container">
            <div className="contact-us-form">
                <div className="contact-us-form-title">
                    <h2>Contact Us</h2>
                    <div>
                        <a className='book-a-call' href="/pupupu">Book a call</a> or fill the form below and we will get back to you as soon as possible.
                    </div>
                </div>
                <div className="contact-us-form-content">
                    <div className="inputs">

                    {/* <div className="form-input">
                        <input type="text" placeholder="Name" />
                    </div> */}
                    <div className="form-input">
                        <input type="text" placeholder="Company or name" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Reply mail" />
                    </div>
                    {/* <div className="form-input">
                        <input type="text" placeholder="Phone" />
                    </div> */}
                    <div className="form-input">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Project budget" />
                    </div>
                    </div>
                    <textarea name="needs-in-details" id="needs-in-details" placeholder='Describe your needs in details...'></textarea><br/>
                    <div className="btn-container">
                        <span>Please be informed that when you click the Send button Proxity will process your personal data in accordance with our Privacy Policy for the purpose of providing you with appropriate information.</span>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className="what-next-container">
                <div className="what-next-card">
                    <div className="title">
                        <h2>What next?</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>1. As soon as we receive your request, we will roughly determine the conditions under which we can complete this project (price, terms).</li>
                            <li>2. In our response we provide this information and invite you to contact us at your leisure.</li>
                            <li>3. And finally, we discuss the details of the project, your wishes and other variables in more detail, and also discuss the conditions and start working.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}