import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image component from next/image
import styles from '../styles/navbar.module.css'; 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <div className={styles.hamburger} onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link href="/" passHref>
                    <Image 
                        src="/images/logo.png" 
                        alt="Logo" 
                        className={styles.logoImg} 
                        width={40} // Set the width you want
                        height={40} // Set the height you want
                    />
                </Link>
                <div className={styles.logoText}>LOGO</div>
                <div className={styles.icons}>
                    <Link href="/search">🔍</Link>
                    <Link href="/favorites">♡</Link>
                    <Link href="/cart">🛒</Link>
                    <div className={styles.languageDropdown}>
                        <button>🌐</button>
                        <div className={styles.dropdownContent}>
                            <Link href="#">English</Link>
                            <Link href="#">Hindi</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/">SHOP</Link></li>
                <li><Link href="/skills">SKILLS</Link></li>
                <li><Link href="/stories">STORIES</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/contact">CONTACT US</Link></li>
            </ul>

      <hr className={styles.thinLine} />

        </nav>
    );
};

export default Navbar;
