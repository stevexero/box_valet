export const testimonials = [
  {
    headerQuote: 'The customer service is A+',
    testimonialText:
      'It’s so nice not having to rent a whole unit for a few boxes. They just left me the boxes I needed, then picked them up when I was ready.  I have had them deliver a couple of times already and delivery is just as promised along with being in the same condition when it originally left.  The customer service is A+ and ready to help.  They make sure you know what’s in each box with a detailed packing list and label so I can easily request the box I want.  Payments are easy.  It’s all about convenience for me.  I recommend Box Valet, it’s a service like no other!',
    avatarImage: '/avatar1.jpeg',
    reviewerName: 'Cole Kent',
  },
  {
    headerQuote: 'They have a customer for life!',
    testimonialText:
      'Box Valet revolutionized the way I handle excess belongings. The convenience of having just the right amount of storage, picked up and delivered right to my doorstep, is unparalleled. Their attention to detail and exceptional customer service means I never worry about my items. Highly efficient and utterly reliable – they have a customer for life!',
    avatarImage: '/avatar2.jpeg',
    reviewerName: 'Jane Dennison',
  },
  {
    headerQuote: 'They catered to my trade-show business storage needs!',
    testimonialText:
      "I can't praise Box Valet enough for their impeccable service. They catered to my trade-show business storage needs without the hassle of a traditional storage unit. The personalized packing list for each box was a thoughtful touch, and accessing my items was just a request away. The efficiency and care they provide have made storage and retrieval a breeze. They've earned my highest recommendation!",
    avatarImage: '/avatar3.jpeg',
    reviewerName: 'Emily Wood',
  },
  {
    headerQuote:
      'Their inventory system made it a breeze to keep track of my things.',
    testimonialText:
      "What a game-changer! Box Valet provided the perfect solution for my temporary storage needs. Their process is seamless – from drop-off to pick-up. Every item returned in pristine condition, and their inventory system made it a breeze to keep track of my things. Simple, straightforward, and stress-free. I'm thoroughly impressed!",
    avatarImage: '/avatar4.jpeg',
    reviewerName: 'Big Mike Bridger',
  },
];

const TestimonialByIndex = (index) => testimonials[index % testimonials.length];

export default TestimonialByIndex;
