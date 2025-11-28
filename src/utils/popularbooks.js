const meaningfulBooks = [
  {
    name: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    dateOfPublishing: "1946-01-01",
    description: "A Holocaust survivor explores how finding purpose gives strength in the darkest times.",
    price: 15.99,
    image: "https://m.media-amazon.com/images/I/61MdAtnimVL.jpg",
    category: "Psychology",
    viewDetails: `Viktor Frankl, a psychiatrist and Holocaust survivor, explains how humans can endure unimaginable suffering when they have a purpose. Drawing from his experiences in concentration camps, Frankl shows that meaning, not pleasure or power, is the deepest human motivation. The book teaches resilience, gratitude, and the power of mindset.`
  },
  {
    name: "The Power of Now",
    author: "Eckhart Tolle",
    dateOfPublishing: "1997-01-01",
    description: "A guide to living fully in the present moment.",
    price: 14.99,
    image: "https://m.media-amazon.com/images/I/81yUt9MLvwL.jpg",
    category: "Self-Help",
    viewDetails: `Tolle explains how most human suffering comes from dwelling on the past or worrying about the future. The book teaches mindfulness, awareness, and inner peace. It's a spiritual and practical manual for reducing stress and reconnecting with yourself.`
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    dateOfPublishing: "2018-10-16",
    description: "A powerful system for building good habits and breaking bad ones.",
    price: 20.49,
    image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    category: "Productivity",
    viewDetails: `James Clear reveals how tiny daily changes lead to extraordinary results. He breaks down habit formation into simple steps based on psychology and neuroscience. The book is practical, motivating, and life-changing for anyone wanting discipline or self-growth.`
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    dateOfPublishing: "2016-09-13",
    description: "A counterintuitive guide to living a good life.",
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    category: "Self-Help",
    viewDetails: `Mark Manson argues that life’s struggles give it meaning, and we must choose what truly deserves our time and energy. The book blends humor with deep philosophy about responsibility, values, and emotional maturity.`
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    dateOfPublishing: "2011-01-01",
    description: "A bold look at how humans evolved, ruled, and shaped the modern world.",
    price: 22.49,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    category: "History",
    viewDetails: `Harari explains how humans became the planet’s dominant species through imagination, shared beliefs, and cooperation. The book explores science, culture, religion, economics, and the future of humanity in a gripping narrative.`
  },
  {
    name: "The Four Agreements",
    author: "Don Miguel Ruiz",
    dateOfPublishing: "1997-01-01",
    description: "Ancient Toltec wisdom for living a peaceful and honorable life.",
    price: 13.49,
    image: "https://m.media-amazon.com/images/I/91AfEwKjDgL.jpg",
    category: "Spirituality",
    viewDetails: `The book lays out four simple life principles: be impeccable with words, don’t take things personally, don’t make assumptions, and always do your best. These agreements reduce emotional pain and bring clarity and freedom.`
  },
  {
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    dateOfPublishing: "1989-08-15",
    description: "A classic guide to personal and professional success.",
    price: 18.49,
    image: "https://m.media-amazon.com/images/I/71Koyhv2bML.jpg",
    category: "Leadership",
    viewDetails: `Covey’s seven habits teach responsibility, priority management, teamwork, communication, and continuous improvement. It is one of the most influential self-improvement books ever written.`
  },
  {
    name: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    dateOfPublishing: "1996-01-01",
    description: "A fable about achieving success through inner peace and values.",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/61OByUf1TfL.jpg",
    category: "Motivation",
    viewDetails: `A burned-out lawyer discovers a Himalayan monastery that teaches the secrets of mindfulness, purpose, and joyful living. It’s simple yet inspiring, filled with life lessons on discipline and happiness.`
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    dateOfPublishing: "1997-04-01",
    description: "A life-changing perspective on money, assets, and financial freedom.",
    price: 14.49,
    image: "https://m.media-amazon.com/images/I/81N9xAIkohL.jpg",
    category: "Finance",
    viewDetails: `Kiyosaki compares lessons learned from his educated but poor father and his wealthy mentor. The book teaches financial IQ, investing, building assets, and escaping the rat race.`
  },
  {
    name: "Meditations",
    author: "Marcus Aurelius",
    dateOfPublishing: "180-01-01",
    description: "Stoic wisdom from a Roman emperor on calmness, virtue, and self-discipline.",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/81DFDGzHZqL.jpg",
    category: "Philosophy",
    viewDetails: `Aurelius wrote these personal notes to strengthen his mind and character. The book teaches emotional control, humility, gratitude, and resilience. It’s one of the most meaningful philosophical works ever created.`
  }
];

export default meaningfulBooks;
