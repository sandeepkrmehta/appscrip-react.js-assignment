import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.css'; 
import { FaChevronDown } from 'react-icons/fa';
import { CiSearch, CiHeart } from 'react-icons/ci'; 
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                        width={40} 
                        height={40} 
                    />
                </Link>
                <div className={styles.logoText}>LOGO</div>

                <div className={styles.icons}>
                    <Link href="/search">
                        <CiSearch size={28} />
                    </Link>
                    <Link href="/favorites">
                        <CiHeart size={28} />
                    </Link>
                    <Link href="/cart">
                        <BsHandbag size={22} />
                    </Link>
                    <Link href="/contact">
                        <IoPersonOutline size={24} />
                    </Link>
                    <div className={styles.languageDropdown}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <h2 style={{ marginRight: '5px' }}>ENG</h2>
                            <FaChevronDown size={20} />
                        </button>
                        {dropdownOpen && (
                            <div className={styles.dropdownContent}>
                                <Link href="#">English</Link>
                                <Link href="#">Hindi</Link>
                            </div>
                        )}
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
