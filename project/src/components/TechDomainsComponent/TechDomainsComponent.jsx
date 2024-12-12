import "./tech-dom.scss";
import { useState } from 'react';
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon4 from "./images/icon4.svg";
import icon5 from "./images/icon5.svg";
import icon6 from "./images/icon6.svg";
import icon7 from "./images/icon7.svg";
import icon8 from "./images/icon8.svg";
import icon10 from "./images/icon10.svg";
import icon11 from "./images/icon11.svg";
import icon12 from "./images/icon12.svg";
import icon13 from "./images/icon13.svg";
import icon14 from "./images/icon14.svg";
import icon15 from "./images/icon15.svg";
import icon16 from "./images/icon16.svg";
import icon17 from "./images/icon17.svg";
import icon18 from "./images/icon18.svg";
import icon19 from "./images/icon19.svg";
import icon20 from "./images/icon20.svg";
import icon21 from "./images/icon21.svg";
import icon22 from "./images/icon22.svg";
import icon23 from "./images/icon23.svg";

const TechDomainsComponent = () => {

    const [currentTechDomain, setCurrentTechDomain] = useState("Process Automation");

    const equality = {
        "Process Automation": "process-automation",
        "Artificial Intelligence": "artificial-intelligence",
        "Big Data": "big-data",
        "Business Intelligence": "business-intelligence",
        "Blockchain": "blockchain",
        "Cloud Computing": "cloud-computing",
        "Cyber Security": "cyber-security"
    }

    const changeTechDomains = (e) => {
        if (e.target.value !== currentTechDomain) {
            document.getElementById(`inp-${equality[currentTechDomain]}`).classList.remove("active-option-input");
            document.getElementById(`inp-${equality[e.target.value]}`).classList.add("active-option-input");
            document.getElementById(equality[currentTechDomain]).style.opacity = 0;
            setTimeout(() => {
                document.getElementById(equality[currentTechDomain]).style.display = "none";
                document.getElementById(equality[e.target.value]).style.display = "block";

                setTimeout(() => {
                    document.getElementById(equality[e.target.value]).style.opacity = 1;
                    setCurrentTechDomain(e.target.value);
                }, 10);
            }, 290);
        }
    }

    return (
        <div className="tech-domains">
            <div className="title"> 
                <h2>Tech Domains</h2>
            </div>
            <div className="container">
                <div className="tech-domain-names-container">
                    <div className="tech-domain-names">
                        <div className="tech-domain-name">
                            <input className="active-option-input" id="inp-process-automation" type="submit" value="Process Automation" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-artificial-intelligence" type="submit" value="Artificial Intelligence" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-big-data" type="submit" value="Big Data" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-business-intelligence" type="submit" value="Business Intelligence" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-blockchain" type="submit" value="Blockchain" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-cloud-computing" type="submit" value="Cloud Computing" onClick={changeTechDomains} />
                        </div><br/>
                        <div className="tech-domain-name">
                            <input id="inp-cyber-security" type="submit" value="Cyber Security" onClick={changeTechDomains} />
                        </div><br/>
                    </div>
                </div>
                <div className="tech-description-container">
                    <div id="process-automation" className="tech-description descr-visible">
                        <div className="tech-name">
                            <h3>Process Automation</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/workflow-automation">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Workflow automation</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/business-process-automation">
                                        <img src={icon2} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Business process automation</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/document-data-extraction-processing">
                                        <img src={icon3} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Document data extraction & processing</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/virtual-assistance-support">
                                        <img src={icon4} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Virtual assistance & support</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="artificial-intelligence" className="tech-description">
                        <div className="tech-name">
                            <h3>Artificial Intelligence</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/ai-for-business">
                                        <img src={icon13} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>AI for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/machine-learning">
                                        <img src={icon22} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Machine learning</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/deep-learning">
                                        <img src={icon12} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Deep learning</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/generative-ai">
                                        <img src={icon2} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Generative AI</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/computer-vision">
                                        <img src={icon23} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Computer vision</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/reinforcement-learning">
                                        <img src={icon18} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Reinforcement learning</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="big-data" className="tech-description">
                        <div className="tech-name">
                            <h3>Big Data</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/data-warehouse">
                                        <img src={icon19} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Data warehouse</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/data-lake">
                                        <img src={icon20} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Data lake</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/big-data-analytics">
                                        <img src={icon10} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Big data analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/business-intelligence">
                                        <img src={icon21} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Business intelligence</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/machine-learning-for-big-data">
                                        <img src={icon22} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Machine learning for big data</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="business-intelligence" className="tech-description">
                        <div className="tech-name">
                            <h3>Business Intelligence</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/diagnostic-analytics">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Diagnostic analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/data-visualization">
                                        <img src={icon13} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Data visualization</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/predictive-analytics">
                                        <img src={icon21} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Predictive analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/reporting-and-analytics">
                                        <img src={icon3} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Reporting and analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="blockchain" className="tech-description">
                        <div className="tech-name">
                            <h3>Blockchain</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/blockchain-for-business">
                                        <img src={icon13} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Blockchain for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            {/* <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/blockchain-for-developers">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Blockchain for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div> */}
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/cryptocurrency">
                                        <img src={icon11} style={{ width: "50px", height: "50px" }} alt="" />    
                                        <h4>Cryptocurrency</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/decentralized-applications">
                                    <   img src={icon6} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Decentralized applications</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/smart-contracts">
                                        <img src={icon7} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Smart contracts</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/blockchain-for-entrepreneurs">
                                        <img src={icon18} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Blockchain for entrepreneurs</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="cloud-computing" className="tech-description">
                        <div className="tech-name">
                            <h3>Cloud Computing</h3>
                        </div>
                        <div className="options-container">
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/cloud-computing-for-business">
                                        <img src={icon5} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Cloud computing for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            {/* <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/cloud-computing-for-developers">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Cloud computing for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div> */}
                            {/* <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/infrastructure-as-a-service">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Infrastructure as a service</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div> */}
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/serverless-computing">
                                        <img src={icon2} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Serverless computing</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/virtualization">
                                        <img src={icon8} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Virtualization</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/containerization">
                                        <img src={icon12} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Containerization</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                    <div id="cyber-security" className="tech-description">
                        <div className="tech-name">
                            <h3>Cyber Security</h3>
                        </div>
                        <div className="options-container">
                            {/* <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/cyber-security-for-business">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Cyber security for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/cyber-security-for-developers">
                                        <img src={icon1} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Cyber security for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div> */}
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/encryption">
                                        <img src={icon17} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Encryption</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/firewalls">
                                        <img src={icon14} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Firewalls</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/intrusion-detection">
                                        <img src={icon11} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Intrusion detection</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/malware">
                                        <img src={icon16} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Malware</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/network-security">
                                        <img src={icon15} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Network security</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/vulnerability-management">
                                        <img src={icon13} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Vulnerability management</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}          

export default TechDomainsComponent;