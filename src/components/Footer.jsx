import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footnav">
            <div className="glowing-logo">
                <img src="./assets/logo.png" alt="azure-logo"/>
                <div className="glow"></div>
            </div>
            <div className="foot-contact">
                <h1>Liên hệ</h1>
                <ul>
                    <li><FontAwesomeIcon icon={faPhone}/>(+84) 912 282 910</li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <a href="mailto:azureamsprogrammingclub@gmail.com">AzureAms</a></li>
                    <li>
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <a href="https://www.facebook.com/azureamsprogramming" target="_blank" rel="noopener noreferrer">AzureAms Programming Club</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;