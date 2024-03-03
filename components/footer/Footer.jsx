import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_main}>
      <div className='container text_white'>
        <div className={styles.footer_container}>
          <div className={styles.left}>
            <Link href='/'>
              <Image
                src='/logodark.svg'
                alt='BoxValet logo'
                width={204}
                height={71}
                priority
              />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Malesuada fames ac turpis egestas integer eget aliquet nibh.
            </p>
          </div>
          <div className={styles.center}>
            <ul>
              <li className='bold margin_t_25'>Contact</li>
              <li className='margin_t_25'>
                <Link href='#' />
                Phone:{' '}
                <a href='tel:+17026899811' className='text_white'>
                  +1 (702) 689 9811
                </a>
              </li>
              <li className='margin_t_6'>
                <Link href='#' />
                Email:{' '}
                <a href='mailto:boxvaletllc@gmail.com' className='text_white'>
                  boxvaletllc@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li className='bold margin_t_25'>Support</li>
              <li className='margin_t_25'>
                <Link href='/privacypolicy' className='text_white'>
                  Privacy Policy
                </Link>
              </li>
              <li className='margin_t_6'>
                <Link href='/termsofservice' className='text_white'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className='text_center margin_t_25'>
          Copyright &copy; 2024 BoxValet. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
