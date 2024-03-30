import Image from 'next/image';
import Card from './card/Card';

export default function Overview() {
  const cardsData = [
    {
      cardImage: (
        <Image
          src='/truck.png'
          alt='Decorative icon'
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
          alt='Decorative icon'
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
          alt='Decorative icon'
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
          alt='Decorative icon'
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
    <section id='Overview' className='max-w-6xl container py-32 px-4'>
      <div>
        <h2 className='text-4xl text-center'>
          Sit Back. Relax. We&apos;ll Handle It.
        </h2>
        <div className='mt-14 md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-4 flex flex-col justify-center items-center'>
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
    </section>
  );
}
