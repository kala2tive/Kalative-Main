import React from 'react'
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();
  const { app__footer, footer__center, footer__side1, side1__detail, side1__links, footer__side, copyright__sec } = styles;

  return (
    <footer className={app__footer}>
      <div className={footer__center}>

        {/* Side 1 */}

        <div className={footer__side1}>
          <div className={side1__detail}>
            <img src={Logo} alt="Kalative" />
            <p>We believe in achieving our customers' dreams and showing them that their dreams have become a reality. If you have one such, then we are the right place for you.</p>
          </div>
          <div className={side1__links}>
            <a href="https://www.instagram.com/kalative_" target='_blank' rel='noreferrer'><ion-icon name='logo-instagram'></ion-icon></a>
            <a href="/" target='_blank' rel='norefferer'><ion-icon name='logo-discord'></ion-icon></a>
          </div>
        </div>

        {/* Side 1 */}

        {/* Side 2 */}

        <div className={footer__side}>
          <p>Company</p>
          <ul>
            <li><a onClick={() => {navigate('/')}} href="#whyus">About Us</a></li>
            <li><a href="https://elitceler.com" target='_blank' rel='noreferrer'>Partners</a></li>
            <li><Link to="/projects">Products</Link></li>
            <li><Link to="/projects">Resources</Link></li>
          </ul>
        </div>

        {/* Side 2 */}

        {/* Side 3 */}
        
        <div className={footer__side}>
          <p>Support</p>
          <ul>
            <li><a href='mailto:tech.kalative@gmail.com'>Help</a></li>
            <li><Link to={'/'}>Privacy Policy</Link></li>
            <li><Link to={'/'}>Terms</Link></li>
            <li><Link to={'/'}>FAQ's</Link></li>
          </ul>
        </div>

        {/* Side 3 */}

      </div>

      <div className={copyright__sec}>
        <p>&copy; 2022 Kalative. All Right Reserved</p>
      </div>

    </footer>
  )
}

export default Footer