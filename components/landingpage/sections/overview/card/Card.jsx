export default function Card({ cardImage, cardHeader, cardParagraph }) {
  return (
    <div className='bg-white md:bg-accent-primary text-black-primary md:text-white flex flex-col items-center justify-center max-w-48 md:max-w-60 py-4 md:p-7 rounded-2xl md:first:justify-self-end lg:first:justify-self-start md:[&:nth-child(3)]:justify-self-end lg:[&:nth-child(3)]:justify-self-start'>
      <div className='w-32 h-32 bg-accent-secondary md:bg-white rounded-full flex justify-center items-center'>
        {cardImage}
      </div>
      <div className='mt-6 text-center text-xl px-2'>{cardHeader}</div>
      <div className='mt-8 text-center'>{cardParagraph}</div>
    </div>
  );
}
