import './Footer.scss'
import logo from '../../assets/images/menu-logo.svg'
//jимпорт одинаковых файлов
function Footer() {
    return (
        <footer className='footer-wrapper'>
            <div className='links-wrapper'>
                <div class="logo-footer">
                    <img 
                        src={logo} 
                        alt="logo"
                    />
                </div>
                <ul className='links-group'>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Features
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                        Pricing
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                        Services
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                        Partners
                        </a>
                    </li>                    
                </ul>
                <ul className='links-group'>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            About Us
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Tutorials
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Resources
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Help Center
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Templates
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Case Studies
                        </a>
                    </li>                      
                </ul>
                <ul className='links-group'>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Medium
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Twitter
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Facebook
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Instagram
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            LinkedIn
                        </a>
                    </li>                    
                </ul>
                <ul className='links-group'>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Contact Us
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Slack
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#0">
                            Jobs
                        </a>
                    </li>                    
                </ul>
            </div>
            <div className='copyright-links'>
                <a className='copy-link' href="#0">NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</a>
                <a className='copy-link' href="#0">Terms & Conditions</a>
                <a className='copy-link' href="#0">Privacy Policy</a>
            </div>                
        </footer>
    );
}

export default Footer;