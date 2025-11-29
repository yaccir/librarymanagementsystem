const meaningfulBooks = [
  {
    name: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    dateOfPublishing: "1946-01-01",
    description:
      "This powerful book explores how a strong sense of purpose can help people survive even the harshest suffering. Viktor Frankl, a psychiatrist and Holocaust survivor, shares his experiences in Nazi concentration camps and explains how meaning gives humans the strength to endure pain, loss, and hopelessness. Through logotherapy, he teaches that meaning is the deepest human motivation. Frankl encourages readers to take responsibility for their lives, find purpose in struggle, and use challenges as opportunities for growth. The book inspires resilience, gratitude, and a deeper understanding of how mindset shapes our ability to overcome adversity.",
    price: 15.99,
    image: "https://m.media-amazon.com/images/I/61MdAtnimVL.jpg",
    category: "Psychology",
    rating: 4.9
  },
  {
    name: "The Power of Now",
    author: "Eckhart Tolle",
    dateOfPublishing: "1997-01-01",
    description:
      "This book teaches the transformative power of living fully in the present moment. Eckhart Tolle explains how most emotional suffering comes from dwelling on the past or worrying about the future. By observing our thoughts instead of being controlled by them, we can experience true peace and awareness. Tolle blends spirituality with practical guidance, helping readers break free from constant mental noise and reconnect with inner stillness. The book encourages mindfulness, acceptance, and conscious living. It provides simple yet profound tools for reducing stress, gaining clarity, and discovering a deeper sense of happiness and freedom in everyday life.",
    price: 14.99,
    image: "https://m.media-amazon.com/images/I/81yUt9MLvwL.jpg",
    category: "Self-Help",
    rating: 4.8
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    dateOfPublishing: "2018-10-16",
    description:
      "Atomic Habits reveals how small daily improvements can create remarkable long-term results. James Clear explains the science behind habit formation and shows why tiny changes, applied consistently, matter more than big goals. He introduces a four-step method to build good habits: make them obvious, attractive, easy, and satisfying. The book also explains how environment influences behavior, how to break bad habits, and how identity shapes action. Clear’s practical strategies help readers improve productivity, discipline, health, and personal growth. It’s a clear, motivating guide for anyone who wants to change their life through simple, actionable steps that compound over time.",
    price: 20.49,
    image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    category: "Productivity",
    rating: 4.9
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    dateOfPublishing: "2016-09-13",
    description:
      "Mark Manson offers a refreshing perspective on happiness by arguing that life’s problems give it meaning. Instead of seeking constant positivity, he explains that choosing what truly deserves our time and energy is the key to a better life. The book mixes humor, philosophy, and honesty to highlight the importance of responsibility, values, and emotional maturity. Manson encourages readers to stop chasing approval, accept their limitations, and embrace discomfort as a path to growth. With practical lessons and relatable stories, it teaches how focusing on what truly matters leads to clarity, confidence, and a more meaningful, grounded life.",
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    category: "Self-Help",
    rating: 4.5
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    dateOfPublishing: "2011-01-01",
    description:
      "Sapiens explores the extraordinary journey of humans from primitive hunter-gatherers to the dominant species shaping the modern world. Yuval Noah Harari explains how shared beliefs, imagination, and cooperation helped humans build religions, nations, cultures, and economies. The book connects anthropology, science, psychology, and history in a simple, engaging style. Harari also examines how technology, capitalism, and social systems influence today’s world. With thought-provoking ideas, he challenges readers to rethink human behavior, progress, and the future of civilization. Sapiens offers a powerful understanding of who we are, how we evolved, and how our choices shape the planet.",
    price: 22.49,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    category: "History",
    rating: 4.8
  },
  {
    name: "The Four Agreements",
    author: "Don Miguel Ruiz",
    dateOfPublishing: "1997-01-01",
    description:
      "This inspiring book presents four powerful principles drawn from ancient Toltec wisdom to help people live with clarity and inner peace. The agreements—be impeccable with your word, don’t take things personally, don’t make assumptions, and always do your best—serve as simple but transformative life rules. Don Miguel Ruiz explains how emotional suffering comes from false beliefs and mental barriers we create. By practicing these agreements, individuals can reduce stress, improve relationships, and gain self-awareness. The book offers practical guidance for healing emotional wounds, embracing self-love, and achieving personal freedom through conscious, mindful living rooted in truth and authenticity.",
    price: 13.49,
    image: "https://m.media-amazon.com/images/I/91AfEwKjDgL.jpg",
    category: "Spirituality",
    rating: 4.7
  },
  {
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    dateOfPublishing: "1989-08-15",
    description:
      "This classic guide teaches powerful principles for personal and professional success. Stephen Covey explains seven habits that help individuals build strong character, take responsibility, manage priorities, and work effectively with others. The book emphasizes values like integrity, discipline, teamwork, and continuous improvement. Covey combines psychology, leadership, and timeless wisdom to help readers shift from reactive living to proactive growth. Through practical examples, he demonstrates how changing habits can transform relationships, productivity, and mindset. The 7 Habits remains one of the most influential books for developing leadership skills, building trust, and creating a balanced, purpose-driven life.",
    price: 18.49,
    image: "https://m.media-amazon.com/images/I/71Koyhv2bML.jpg",
    category: "Leadership",
    rating: 4.8
  },
  {
    name: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    dateOfPublishing: "1996-01-01",
    description:
      "This inspiring fable follows a successful lawyer who gives up his luxurious lifestyle after a health crisis and travels to the Himalayas in search of peace and purpose. There he meets monks who teach powerful lessons about mindfulness, discipline, happiness, and meaningful living. Robin Sharma blends storytelling with spiritual wisdom, offering practical guidance on self-growth, focus, gratitude, and inner balance. The book encourages readers to slow down, reflect on their values, and build good habits that nourish both mind and soul. It’s a simple yet profound journey that inspires a more thoughtful, joyful, and purposeful life.",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/61OByUf1TfL.jpg",
    category: "Motivation",
    rating: 4.7
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    dateOfPublishing: "1997-04-01",
    description:
      "Rich Dad Poor Dad challenges traditional beliefs about money by comparing lessons learned from the author’s two father figures—his educated but financially struggling father and his wealthy mentor. Robert Kiyosaki explains the difference between assets and liabilities, the importance of financial education, and how to escape the cycle of working only for a paycheck. The book emphasizes investing, building assets, and developing an entrepreneurial mindset. Through simple stories and practical insights, it encourages readers to rethink money, take control of finances, and build long-term wealth. It remains one of the most influential books on financial freedom.",
    price: 14.49,
    image: "https://m.media-amazon.com/images/I/81N9xAIkohL.jpg",
    category: "Finance",
    rating: 4.6
  },
  {
    name: "Meditations",
    author: "Marcus Aurelius",
    dateOfPublishing: "180-01-01",
    description:
      "Meditations is a timeless collection of personal notes written by Roman emperor Marcus Aurelius. Through Stoic wisdom, he reflects on self-discipline, calmness, humility, gratitude, and moral character. The book teaches how to manage emotions, face challenges with courage, accept what cannot be controlled, and live with integrity. Aurelius reminds readers to stay grounded, treat others with kindness, and focus on inner strength rather than external circumstances. His insights offer powerful tools for building resilience, reducing stress, and finding peace in a chaotic world. Meditations remains one of the most meaningful philosophical works ever created.",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/81DFDGzHZqL.jpg",
    category: "Philosophy",
    rating: 4.9
  }
];

export default meaningfulBooks;
