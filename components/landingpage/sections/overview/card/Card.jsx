import styles from './card.module.css';

export default function Card({ cardImage, cardHeader, cardParagraph }) {
  return (
    <div className={`${styles.card} corner_radius`}>
      <div className={styles.card_image}>{cardImage}</div>
      <div className='heading_tertiary text_center margin_t_25'>
        {cardHeader}
      </div>
      <div className='text_center margin_t_31'>{cardParagraph}</div>
    </div>
  );
}
