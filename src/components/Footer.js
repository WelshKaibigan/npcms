import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Footer=() => (
    
    <div id="site-footer">
        <ul className="social-links-list">
            <li className="test">
                <a href="https://facebook.com/nickjamespitt" target="_blank" rel="noopener noreferrer" className="media-icon">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </li>
            <li>
                <a href="https://twitter.com/wkaibigan" target="_blank" rel="noopener noreferrer" className="media-icon">  <FontAwesomeIcon icon={faTwitter} size="2x" /></a>   
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nicholas-pitt-b616b11aa" target="_blank" rel="noopener noreferrer" className="media-icon">  <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>    
            </li>
        </ul>    
    </div>
    
)

export default Footer
