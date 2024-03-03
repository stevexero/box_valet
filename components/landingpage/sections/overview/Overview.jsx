import Image from 'next/image';
import Card from './card/Card';
import styles from './overview.module.css';

export default function Overview() {
  const cardsData = [
    {
      cardImage: (
        <Image
          src='/truck.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Bring You Boxes',
      cardParagraph: "Or whatever other storage containers you'll need.",
    },
    {
      cardImage: (
        <Image
          src='/clipboard.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Pick Up When Ready',
      cardParagraph: "We'll provide an itemized invoice.",
    },
    {
      cardImage: (
        <Image
          src='/shelf.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Store Your Items',
      cardParagraph: 'In a location-specific, climate-controlled facility.',
    },
    {
      cardImage: (
        <Image
          src='/hand.png'
          alt='Isometric Storage Room'
          width={84}
          height={84}
          priority
        />
      ),
      cardHeader: 'We Return Your Items',
      cardParagraph: 'With our on-demand return services.  Any time.',
    },
  ];

  return (
    <section id='Overview' className={`${styles.overview_main} padding_tb_121`}>
      <div className='container'>
        <div className={styles.overview_container}>
          <h2 className='heading_secondary text_center'>
            Sit Back. Relax. We&apos;ll Handle It.
          </h2>
          <div className={`${styles.card_container} margin_t_51`}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                cardImage={card.cardImage}
                cardHeader={card.cardHeader}
                cardParagraph={card.cardParagraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
