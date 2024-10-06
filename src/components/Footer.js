// components/Footer.js
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faLinkedin, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Add your social icons here
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showFollow, setShowFollow] = useState(false);
  const [showMuse, setShowMuse] = useState(false);

  return (
    <footer className={styles.footer}>
      {/* Top Footer */}
      <div className={styles.topFooter}>
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
          <p className={styles.newsletterDescription}>Sign up for updates from mettā muse</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your e-mail..." required className={styles.newsletterInput} />
            <button type="submit" className={styles.newsletterButton}>SUBSCRIBE</button>
          </form>
        </div>
        
        <div className={styles.contact}>
          <h3>CALL US</h3>
          <p> +44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          {/* <hr className={styles.hrLine} /> */}
          <p><strong>CURRENCY</strong></p>
          <p>USD</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <hr className={styles.hrLine} />

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.column}>
          <ul className={styles.quickLinks}>
            <h2>mettā muse</h2>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul className={styles.quickLinks}>
          <h2>Quick Links</h2>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.column}>
  <h2>Follow Us</h2>
  <div className={styles['social-icons']}>
    <a href="#" aria-label="Follow us on Instagram" className={styles.socialIcon}>
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
    <a href="#" aria-label="Follow us on LinkedIn" className={styles.socialIcon}>
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
    <a href="#" aria-label="Follow us on Twitter" className={styles.socialIcon}>
      {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
    </a>
    <a href="#" aria-label="Follow us on Facebook" className={styles.socialIcon}>
      {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
    </a>
  </div>
  <div className={styles['payment-methods']}>
    <p>mettä muse ACCEPTS</p>
    <div className={styles['payment-icons']}>
      <Image src="/icons/gpay.png" alt="Google Pay" width={40} height={40} />
      <Image src="/icons/visa.png" alt="Visa" width={40} height={40} />
      <Image src="/icons/paypal.png" alt="PayPal" width={40} height={40} />
      <Image src="/icons/ame.png" alt="American Express" width={40} height={40} />
      <Image src="/icons/apay.png" alt="Apple Pay" width={40} height={40} />
      <Image src="/icons/paytm.png" alt="Paytm" width={40} height={40} />
    </div>
  </div>
</div>

      </div>


      {/* Footer Bottom */}
      <div className={styles['footer-bottom']}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
