import "./tech-dom.scss";
import { useState } from 'react';
import testImg from "./images/test.svg";

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
                                        <img src={testImg} style={{ width: "50px", height: "50px" }} alt="" />
                                        <h4>Workflow automation</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/business-process-automation">
                                        {/* <img src="/images/" alt="" /> */}
                                        <h4>Business process automation</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/document-data-extraction-processing">
                                        {/* <img src="/images/" alt="" /> */}
                                        <h4>Document data extraction & processing</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/process-automation/virtual-assistance-support">
                                        {/* <img src="/images/" alt="" /> */}
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
                                        <h4>AI for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/machine-learning">
                                        <h4>Machine learning</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/deep-learning">
                                        <h4>Deep learning</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/generative-ai">
                                        <h4>Generative AI</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/computer-vision">
                                        <h4>Computer vision</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/artificial-intelligence/reinforcement-learning">
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
                                        <h4>Data warehouse</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/data-lake">
                                        <h4>Data lake</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/big-data-analytics">
                                        <h4>Big data analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/business-intelligence">
                                        <h4>Business intelligence</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/big-data/machine-learning-for-big-data">
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
                                    <a href="/business-intelligence/business-intelligence-for-business">
                                        <h4>Business intelligence for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/business-intelligence-for-developers">
                                        <h4>Business intelligence for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/data-visualization">
                                        <h4>Data visualization</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/predictive-analytics">
                                        <h4>Predictive analytics</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/business-intelligence/reporting-and-analytics">
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
                                        <h4>Blockchain for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/blockchain-for-developers">
                                        <h4>Blockchain for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/cryptocurrency">
                                        <h4>Cryptocurrency</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/decentralized-applications">
                                        <h4>Decentralized applications</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/smart-contracts">
                                        <h4>Smart contracts</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/blockchain/blockchain-for-entrepreneurs">
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
                                        <h4>Cloud computing for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/cloud-computing-for-developers">
                                        <h4>Cloud computing for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/infrastructure-as-a-service">
                                        <h4>Infrastructure as a service</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/serverless-computing">
                                        <h4>Serverless computing</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/virtualization">
                                        <h4>Virtualization</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cloud-computing/containerization">
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
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/cyber-security-for-business">
                                        <h4>Cyber security for business</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/cyber-security-for-developers">
                                        <h4>Cyber security for developers</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/encryption">
                                        <h4>Encryption</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/firewalls">
                                        <h4>Firewalls</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/intrusion-detection">
                                        <h4>Intrusion detection</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/malware">
                                        <h4>Malware</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/network-security">
                                        <h4>Network security</h4>
                                    </a>
                                </div>
                                <div className="option-underline"></div>
                            </div>
                            <div className="option">
                                <div className="option-btn">
                                    <a href="/cyber-security/vulnerability-management">
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