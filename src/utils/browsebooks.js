const browsebooks = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    description:
      "To Kill a Mockingbird is a timeless novel that explores justice, morality, and human nature through the eyes of a young girl, Scout Finch. Set in the racially divided American South, the story follows her father, Atticus Finch, a lawyer who courageously defends a Black man falsely accused of a crime. Through powerful storytelling, the book reveals themes of empathy, prejudice, and moral courage. Harper Lee’s writing captures the innocence of childhood while examining deep social issues. It remains one of the most influential and moving works of literature, encouraging readers to reflect on fairness, compassion, and responsibility."
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8467261-L.jpg",
    description:
      "Sapiens explores the entire journey of human beings—from early hunter-gatherers to creators of modern societies. Yuval Noah Harari explains how humans developed imagination, complex communication, and shared beliefs that allowed them to cooperate on a massive scale. The book connects anthropology, science, politics, culture, and economics in a clear, engaging style. It also examines how agriculture, religion, capitalism, and technology shaped the world we live in today. With thought-provoking insights, Sapiens challenges readers to rethink history, identity, and humanity’s future. It is a powerful, eye-opening look at what makes humans unique and how they shaped civilization."
  },
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/9251962-L.jpg",
    description:
      "Clean Code is a must-read for every programmer who wants to write better, clearer, and more maintainable code. Robert C. Martin explains principles, patterns, and best practices that help developers create software that is elegant, efficient, and easy to understand. The book includes real examples of messy code and step-by-step improvements that demonstrate the art of refactoring. It emphasizes testing, naming conventions, functions, classes, and disciplined coding habits. With practical lessons and strong guidelines, Clean Code helps developers think like professionals and build long-lasting software. It remains one of the most influential books in software engineering and craftsmanship."
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/11153267-L.jpg",
    description:
      "This book challenges traditional self-help advice by suggesting that life becomes better when we stop trying to be positive all the time. Mark Manson explains that struggles give life meaning, and we must choose what truly deserves our energy. Through humor, honesty, and clear philosophy, he teaches how to accept limitations, take responsibility, and focus on what matters most. The book encourages emotional maturity, realistic expectations, and deeper values. Instead of chasing happiness, Manson shows how embracing discomfort and facing reality leads to growth. It is practical, refreshing, and deeply meaningful for anyone seeking clarity and purpose."
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7884866-L.jpg",
    description:
      "The first book in the Harry Potter series introduces readers to a magical world full of wonder, friendship, and adventure. Harry discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry. As he learns about spells, mysteries, and his own past, he forms strong bonds with friends Ron and Hermione. Together, they uncover secrets about a powerful stone and face the return of a dark enemy. J.K. Rowling blends imagination, suspense, humor, and emotion to create an unforgettable story. This opening chapter sets the foundation for one of the most beloved fantasy series ever."
  },
  {
    name: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/10523369-L.jpg",
    description:
      "The Diary of a Young Girl is the real and heartfelt diary of Anne Frank, a Jewish teenager hiding from the Nazis during World War II. Living in a secret annex with her family, Anne writes about her fears, hopes, dreams, and daily struggles. Her words reveal the emotional strength, innocence, and wisdom of a young girl facing unimaginable circumstances. The diary captures the human spirit's resilience and the desire for freedom, dignity, and peace. Anne’s reflections are deeply touching and remain a powerful reminder of the impact of war, discrimination, and the importance of compassion and humanity."
  },
  {
    name: "Dune",
    author: "Frank Herbert",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8100920-L.jpg",
    description:
      "Dune is an epic science-fiction masterpiece set on the desert planet of Arrakis, where powerful forces compete for control of a rare and valuable resource known as spice. The story follows Paul Atreides, a young noble who becomes part of a complex struggle involving politics, religion, ecology, and destiny. As Paul learns the ways of the desert people, he discovers his extraordinary potential and confronts forces that will shape the future of the universe. Frank Herbert masterfully blends adventure, philosophy, and world-building, creating one of the richest and most influential sci-fi worlds ever written. Dune remains timeless."
  },
  {
    name: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8679551-L.jpg",
    description:
      "Gone Girl is a gripping psychological thriller about a marriage full of secrets, manipulation, and shocking twists. When Amy Dunne goes missing, suspicion immediately falls on her husband, Nick, whose strange behavior raises questions. As the investigation unfolds, the story reveals hidden lies, unexpected truths, and the dark side of relationships. Gillian Flynn’s sharp writing, unreliable narrators, and suspenseful storytelling keep readers guessing until the final pages. The novel explores themes of identity, deception, and the pressures of modern relationships. It is intense, clever, and unforgettable—a mystery that redefined psychological thrillers for a new generation of readers."
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8081536-L.jpg",
    description:
      "Pride and Prejudice is a classic romance that follows Elizabeth Bennet, a smart and spirited young woman who challenges societal expectations. When she meets the wealthy but reserved Mr. Darcy, misunderstandings, pride, and prejudice shape their early interactions. Through witty dialogue and sharp social commentary, Jane Austen explores love, family, class, and character. As Elizabeth and Darcy slowly learn the truth about each other, their relationship transforms into one of respect and deep affection. The novel remains beloved for its humor, emotion, and timeless portrayal of human relationships. It continues to captivate readers across generations."
  },
  {
    name: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    description:
      "A Brief History of Time introduces complex concepts of the universe in a simple, engaging way. Stephen Hawking explains black holes, the Big Bang, space-time, and the laws of physics that shape reality. The book explores humanity’s biggest questions: Where did the universe come from? How does it work? What is the nature of time? Hawking uses clear language, diagrams, and humor to make science accessible to everyone. His insights encourage curiosity and inspire readers to think deeply about existence, creation, and the future of scientific discovery. It remains one of the most influential science books ever written."
  }
];

export default browsebooks;
