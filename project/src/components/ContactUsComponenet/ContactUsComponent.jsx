import './contactus.scss';

export default function ContactUsComponent() {
    return (
        <div className="contact-us-container">
            <div className="contact-us-form">
                <div className="contact-us-form-title">
                    <h2>Contact Us</h2>
                    <div>
                        some very interesting text will be here. Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </div>
                </div>
                <div className="contact-us-form-content">
                    <div className="inputs">

                    <div className="form-input">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Company" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Reply mail" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Project budget" />
                    </div>
                    </div>
                    <textarea name="needs-in-details" id="needs-in-details" placeholder='Describe your needs in details...'></textarea><br/>
                    <div className="btn-container">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque, quos, repellendus, laborum, quisquam, voluptatem, aspernatur, consequuntur, fugiat, eaque.</span>
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
                            <li>1. Once we’ve received and processed your request, we’ll get back to you to detail your project needs and sign an NDA to ensure confidentiality.</li>
                            <li>2. After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.</li>
                            <li>3. We’ll then get back to you with a quote for your project.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}