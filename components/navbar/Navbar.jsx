import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='BoxValet logo'
                width={204}
                height={71}
                priority
              />
            </Link>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <Link href='/howitworks'>HOW IT WORKS</Link>
              </li>
              <li>
                <Link href='/pricing'>PRICING</Link>
              </li>
              <li>
                <Link href='/signin'>SIGN IN</Link>
              </li>
              <li>
                <Link href='/contact'>CONTACT US</Link>
              </li>
              <li>
                <Link
                  className='button button_primary corner_radius'
                  href='/booking'
                >
                  BOOK NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className={styles.mobile_main}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='BoxValet logo'
              width={204}
              height={71}
              priority
            />
          </Link>
        </div>
        <div className={styles.hamburger}>
          <div className={styles.container} onClick={toggleMenu}>
            <div
              className={`${styles.bar} ${isOpen ? styles.changeBar1 : ''}`}
            ></div>
            <div
              className={`${styles.bar} ${isOpen ? styles.changeBar2 : ''}`}
            ></div>
            <div
              className={`${styles.bar} ${isOpen ? styles.changeBar3 : ''}`}
            ></div>
          </div>
          <div
            className={`${styles.menuOverlay} ${
              isOpen ? styles.show : styles.hide
            }`}
          >
            <ul className={styles.menuItems}>
              <li onClick={toggleMenu}>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href='/howitworks'>How it Works</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li className={styles.signinbutton} onClick={toggleMenu}>
                <Link
                  className='button button_primary corner_radius'
                  href='/signin'
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
