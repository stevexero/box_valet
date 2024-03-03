import Image from 'next/image';
import styles from './arrowsandbuttons.module.css';

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type='button' {...restProps}>
      <Image src={'/dotrect.svg'} alt={'dot'} width={10} height={10} priority />
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className={styles.carousel_button} type='button' {...restProps}>
      <Image
        src={'/prevbutton.svg'}
        alt={'previous'}
        width={37}
        height={37}
        priority
      />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className={styles.carousel_button} type='button' {...restProps}>
      <Image
        src={'/nextbutton.svg'}
        alt={'previous'}
        width={37}
        height={37}
        priority
      />
      {children}
    </button>
  );
};
