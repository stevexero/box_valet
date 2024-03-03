import { useState } from 'react';
import Image from 'next/image';
import styles from './calltoaction.module.css';

export default function CallToAction() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // TODO: Send email
    alert('Sending email to ' + email);

    setEmail('');
  };

  return (
    <section
      id='CallToAction'
      className={`${styles.calltoaction_main} padding_tb_121`}
    >
      <div className='container'>
        <div className={styles.calltoaction_container}>
          <div className={styles.left}>
            <Image
              src='/items.png'
              alt='Isometric Storage Room'
              width={480}
              height={480}
              priority
            />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className='heading_tertiary text_right'>
                <div className='text_uppercase'>
                  No matter how big or how small
                </div>
                <br />
                <div className='text_uppercase'>
                  Whether it is wide or if it&apos;s tall
                </div>
                <br />
                <div className='text_uppercase'>
                  Fits on a shelf or a whole wall
                </div>
                <br />
                <div className='heading_secondary'>
                  Simple Storage Solutions
                </div>
                <br />
                <div className='text_uppercase'>For one and for all</div>
              </div>
            </div>
            <div className={`${styles.bottom} corner_radius`}>
              <p className='heading_tertiary text_white'>
                GET MORE INFO IN YOUR INBOX
              </p>
              <form className='margin_t_25' onSubmit={handleEmailSubmit}>
                <input
                  type='email'
                  value={email}
                  placeholder='Email Address'
                  onChange={handleEmailChange}
                />
                <button type='submit'>
                  <Image
                    src='/arrow.svg'
                    alt='Arrow'
                    width={30}
                    height={30}
                    priority
                  />
                </button>
              </form>
            </div>
            <div className={styles.bottom_mobile}>
              <p className='heading_tertiary text_white text_center'>
                GET MORE INFO IN YOUR INBOX
              </p>
              <form className='margin_t_25' onSubmit={handleEmailSubmit}>
                <input
                  type='email'
                  value={email}
                  className='corner_radius'
                  placeholder='Email Address'
                  onChange={handleEmailChange}
                />
                <button type='submit' className='corner_radius'>
                  <div className='text_white'>SEND ME INFO</div>
                  <Image
                    src='/arrow.svg'
                    alt='Arrow'
                    width={22}
                    height={22}
                    priority
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
