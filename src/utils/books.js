const books = [
  // ---------- FICTION (10) ----------
  { name: "To Kill a Mockingbird", author: "Harper Lee", dateOfPublishing: "1960-07-11", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8225261-L.jpg" },
  { name: "The Great Gatsby", author: "F. Scott Fitzgerald", dateOfPublishing: "1925-04-10", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8225636-L.jpg" },
  { name: "Catch-22", author: "Joseph Heller", dateOfPublishing: "1961-11-10", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8231850-L.jpg" },
  { name: "Beloved", author: "Toni Morrison", dateOfPublishing: "1987-09-16", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8226198-L.jpg" },
  { name: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", dateOfPublishing: "1967-05-30", category: "Fiction", image: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { name: "The Kite Runner", author: "Khaled Hosseini", dateOfPublishing: "2003-05-29", category: "Fiction", image: "https://covers.openlibrary.org/b/id/7459251-L.jpg" },
  { name: "The Catcher in the Rye", author: "J.D. Salinger", dateOfPublishing: "1951-07-16", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { name: "Lord of the Flies", author: "William Golding", dateOfPublishing: "1954-09-17", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8231857-L.jpg" },
  { name: "The Road", author: "Cormac McCarthy", dateOfPublishing: "2006-09-26", category: "Fiction", image: "https://covers.openlibrary.org/b/id/5546156-L.jpg" },
  { name: "Atonement", author: "Ian McEwan", dateOfPublishing: "2001-07-17", category: "Fiction", image: "https://covers.openlibrary.org/b/id/8234147-L.jpg" },

  // ---------- SCIENCE (10) ----------
  { name: "A Brief History of Time", author: "Stephen Hawking", dateOfPublishing: "1988-04-01", category: "Science", image: "https://covers.openlibrary.org/b/id/240726-L.jpg" },
  { name: "The Selfish Gene", author: "Richard Dawkins", dateOfPublishing: "1976-03-13", category: "Science", image: "https://covers.openlibrary.org/b/id/7222241-L.jpg" },
  { name: "The Gene: An Intimate History", author: "Siddhartha Mukherjee", dateOfPublishing: "2016-05-17", category: "Science", image: "https://covers.openlibrary.org/b/id/8404184-L.jpg" },
  { name: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", dateOfPublishing: "2010-02-02", category: "Science", image: "https://covers.openlibrary.org/b/id/7771121-L.jpg" },
  { name: "Cosmos", author: "Carl Sagan", dateOfPublishing: "1980-09-28", category: "Science", image: "https://covers.openlibrary.org/b/id/8226193-L.jpg" },
  { name: "The Elegant Universe", author: "Brian Greene", dateOfPublishing: "1999-10-11", category: "Science", image: "https://covers.openlibrary.org/b/id/5032654-L.jpg" },
  { name: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", dateOfPublishing: "1962-01-01", category: "Science", image: "https://covers.openlibrary.org/b/id/8233466-L.jpg" },
  { name: "Silent Spring", author: "Rachel Carson", dateOfPublishing: "1962-09-27", category: "Science", image: "https://covers.openlibrary.org/b/id/8233416-L.jpg" },
  { name: "Thinking, Fast and Slow", author: "Daniel Kahneman", dateOfPublishing: "2011-10-25", category: "Science", image: "https://covers.openlibrary.org/b/id/8231991-L.jpg" },
  { name: "The Sixth Extinction", author: "Elizabeth Kolbert", dateOfPublishing: "2014-02-11", category: "Science", image: "https://covers.openlibrary.org/b/id/8236206-L.jpg" },

  // ---------- HISTORY (10) ----------
  { name: "Guns, Germs, and Steel", author: "Jared Diamond", dateOfPublishing: "1997-03-01", category: "History", image: "https://covers.openlibrary.org/b/id/10909236-L.jpg" },
  { name: "The Silk Roads", author: "Peter Frankopan", dateOfPublishing: "2015-08-27", category: "History", image: "https://covers.openlibrary.org/b/id/8472035-L.jpg" },
  { name: "The History of the Ancient World", author: "Susan Wise Bauer", dateOfPublishing: "2007-03-17", category: "History", image: "https://covers.openlibrary.org/b/id/8235016-L.jpg" },
  { name: "Team of Rivals", author: "Doris Kearns Goodwin", dateOfPublishing: "2005-10-25", category: "History", image: "https://covers.openlibrary.org/b/id/8232308-L.jpg" },
  { name: "The Wright Brothers", author: "David McCullough", dateOfPublishing: "2015-05-05", category: "History", image: "https://covers.openlibrary.org/b/id/8235721-L.jpg" },
  { name: "The Rise and Fall of the Third Reich", author: "William L. Shirer", dateOfPublishing: "1960-10-17", category: "History", image: "https://covers.openlibrary.org/b/id/8235281-L.jpg" },
  { name: "SPQR: A History of Ancient Rome", author: "Mary Beard", dateOfPublishing: "2015-10-06", category: "History", image: "https://covers.openlibrary.org/b/id/8236450-L.jpg" },
  { name: "The Diary of a Young Girl", author: "Anne Frank", dateOfPublishing: "1947-06-25", category: "History", image: "https://covers.openlibrary.org/b/id/10523369-L.jpg" },
  { name: "The Guns of August", author: "Barbara W. Tuchman", dateOfPublishing: "1962-01-01", category: "History", image: "https://covers.openlibrary.org/b/id/8233418-L.jpg" },
  { name: "The Liberation Trilogy", author: "Rick Atkinson", dateOfPublishing: "2002-01-01", category: "History", image: "https://covers.openlibrary.org/b/id/8228778-L.jpg" },

  // ---------- TECHNOLOGY (10) ----------
  { name: "Clean Code", author: "Robert C. Martin", dateOfPublishing: "2008-08-01", category: "Technology", image: "https://covers.openlibrary.org/b/id/9251962-L.jpg" },
  { name: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas", dateOfPublishing: "1999-10-20", category: "Technology", image: "https://covers.openlibrary.org/b/id/8234141-L.jpg" },
  { name: "Design Patterns", author: "Erich Gamma et al.", dateOfPublishing: "1994-10-31", category: "Technology", image: "https://covers.openlibrary.org/b/id/8231909-L.jpg" },
  { name: "Introduction to Algorithms", author: "Thomas H. Cormen", dateOfPublishing: "1990-09-01", category: "Technology", image: "https://covers.openlibrary.org/b/id/8234378-L.jpg" },
  { name: "The Phoenix Project", author: "Gene Kim, Kevin Behr, George Spafford", dateOfPublishing: "2013-01-10", category: "Technology", image: "https://covers.openlibrary.org/b/id/8236035-L.jpg" },
  { name: "You Don't Know JS (series)", author: "Kyle Simpson", dateOfPublishing: "2015-01-01", category: "Technology", image: "https://covers.openlibrary.org/b/id/8234495-L.jpg" },
  { name: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", dateOfPublishing: "1975-01-01", category: "Technology", image: "https://covers.openlibrary.org/b/id/8233439-L.jpg" },
  { name: "Algorithms to Live By", author: "Brian Christian & Tom Griffiths", dateOfPublishing: "2016-04-05", category: "Technology", image: "https://covers.openlibrary.org/b/id/8236612-L.jpg" },
  { name: "The Soul of a New Machine", author: "Tracy Kidder", dateOfPublishing: "1981-01-01", category: "Technology", image: "https://covers.openlibrary.org/b/id/8235110-L.jpg" },
  { name: "Code Complete", author: "Steve McConnell", dateOfPublishing: "1993-06-09", category: "Technology", image: "https://covers.openlibrary.org/b/id/8234215-L.jpg" },

  // ---------- NONFICTION (10) ----------
  { name: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", dateOfPublishing: "2011-02-04", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/713jIoMO3UL-L.jpg".replace(" ", "") }, // fallback safe
  { name: "Man's Search for Meaning", author: "Viktor E. Frankl", dateOfPublishing: "1946-01-01", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/61157LApbuL-L.jpg".replace(" ", "") },
  { name: "The Power of Habit", author: "Charles Duhigg", dateOfPublishing: "2012-02-28", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8234781-L.jpg" },
  { name: "Outliers", author: "Malcolm Gladwell", dateOfPublishing: "2008-11-18", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8234761-L.jpg" },
  { name: "The Tipping Point", author: "Malcolm Gladwell", dateOfPublishing: "2000-01-01", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8234773-L.jpg" },
  { name: "The Power of Now", author: "Eckhart Tolle", dateOfPublishing: "1997-08-19", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8094919-L.jpg" },
  { name: "Freakonomics", author: "Steven D. Levitt & Stephen J. Dubner", dateOfPublishing: "2005-03-01", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8234753-L.jpg" },
  { name: "Bad Blood", author: "John Carreyrou", dateOfPublishing: "2018-05-21", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8465241-L.jpg" },
  { name: "The Art of War", author: "Sun Tzu", dateOfPublishing: "5th century BC", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8235132-L.jpg" },
  { name: "Grit", author: "Angela Duckworth", dateOfPublishing: "2016-05-03", category: "NonFiction", image: "https://covers.openlibrary.org/b/id/8236601-L.jpg" },

  // ---------- FANTASY (10) ----------
  { name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", dateOfPublishing: "1997-06-26", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/7884866-L.jpg" },
  { name: "The Way of Kings", author: "Brandon Sanderson", dateOfPublishing: "2010-08-31", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8235926-L.jpg" },
  { name: "The Hobbit", author: "J.R.R. Tolkien", dateOfPublishing: "1937-09-21", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/6979866-L.jpg" },
  { name: "A Game of Thrones", author: "George R.R. Martin", dateOfPublishing: "1996-08-06", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8231858-L.jpg" },
  { name: "The Name of the Wind", author: "Patrick Rothfuss", dateOfPublishing: "2007-03-27", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8236619-L.jpg" },
  { name: "The Lies of Locke Lamora", author: "Scott Lynch", dateOfPublishing: "2006-06-27", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8236951-L.jpg" },
  { name: "Mistborn: The Final Empire", author: "Brandon Sanderson", dateOfPublishing: "2006-07-17", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8235933-L.jpg" },
  { name: "The Eye of the World", author: "Robert Jordan", dateOfPublishing: "1990-01-15", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8231860-L.jpg" },
  { name: "The Polar Express", author: "Chris Van Allsburg", dateOfPublishing: "1985-09-12", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8236208-L.jpg" },
  { name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", dateOfPublishing: "1950-10-16", category: "Fantasy", image: "https://covers.openlibrary.org/b/id/8231866-L.jpg" },

  // ---------- BIOGRAPHY (10) ----------
  { name: "Becoming", author: "Michelle Obama", dateOfPublishing: "2018-11-13", category: "Biography", image: "https://covers.openlibrary.org/b/id/10523369-L.jpg" },
  { name: "Long Walk to Freedom", author: "Nelson Mandela", dateOfPublishing: "1994-11-12", category: "Biography", image: "https://covers.openlibrary.org/b/id/8235302-L.jpg" },
  { name: "Steve Jobs", author: "Walter Isaacson", dateOfPublishing: "2011-10-24", category: "Biography", image: "https://covers.openlibrary.org/b/id/8236037-L.jpg" },
  { name: "The Diary of a Young Girl", author: "Anne Frank", dateOfPublishing: "1947-06-25", category: "Biography", image: "https://covers.openlibrary.org/b/id/10523369-L.jpg" },
  { name: "When Breath Becomes Air", author: "Paul Kalanithi", dateOfPublishing: "2016-01-12", category: "Biography", image: "https://covers.openlibrary.org/b/id/8236616-L.jpg" },
  { name: "Educated", author: "Tara Westover", dateOfPublishing: "2018-02-18", category: "Biography", image: "https://covers.openlibrary.org/b/id/8236628-L.jpg" },
  { name: "The Wright Brothers", author: "David McCullough", dateOfPublishing: "2015-05-05", category: "Biography", image: "https://covers.openlibrary.org/b/id/8235721-L.jpg" },
  { name: "Team of Rivals", author: "Doris Kearns Goodwin", dateOfPublishing: "2005-10-25", category: "Biography", image: "https://covers.openlibrary.org/b/id/8232308-L.jpg" },
  { name: "Alexander Hamilton", author: "Ron Chernow", dateOfPublishing: "2004-04-26", category: "Biography", image: "https://covers.openlibrary.org/b/id/8235511-L.jpg" },
  { name: "Open: An Autobiography", author: "Andre Agassi", dateOfPublishing: "2009-11-16", category: "Biography", image: "https://covers.openlibrary.org/b/id/8237021-L.jpg" },

  // ---------- SCIFI (10) ----------
  { name: "Dune", author: "Frank Herbert", dateOfPublishing: "1965-08-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8100920-L.jpg" },
  { name: "Neuromancer", author: "William Gibson", dateOfPublishing: "1984-07-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231838-L.jpg" },
  { name: "Foundation", author: "Isaac Asimov", dateOfPublishing: "1951-06-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231828-L.jpg" },
  { name: "Ender's Game", author: "Orson Scott Card", dateOfPublishing: "1985-01-15", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231810-L.jpg" },
  { name: "The Left Hand of Darkness", author: "Ursula K. Le Guin", dateOfPublishing: "1969-03-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231802-L.jpg" },
  { name: "Snow Crash", author: "Neal Stephenson", dateOfPublishing: "1992-06-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231754-L.jpg" },
  { name: "The Martian", author: "Andy Weir", dateOfPublishing: "2011-02-11", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8236604-L.jpg" },
  { name: "Hyperion", author: "Dan Simmons", dateOfPublishing: "1989-05-26", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231790-L.jpg" },
  { name: "The Time Machine", author: "H. G. Wells", dateOfPublishing: "1895-05-07", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231776-L.jpg" },
  { name: "Brave New World", author: "Aldous Huxley", dateOfPublishing: "1932-01-01", category: "Scifi", image: "https://covers.openlibrary.org/b/id/8231762-L.jpg" },

  // ---------- MYSTERY (10) ----------
  { name: "Gone Girl", author: "Gillian Flynn", dateOfPublishing: "2012-06-05", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8679551-L.jpg" },
  { name: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", dateOfPublishing: "2005-08-01", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236150-L.jpg" },
  { name: "The Da Vinci Code", author: "Dan Brown", dateOfPublishing: "2003-03-18", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236132-L.jpg" },
  { name: "Big Little Lies", author: "Liane Moriarty", dateOfPublishing: "2014-07-29", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236127-L.jpg" },
  { name: "In Cold Blood", author: "Truman Capote", dateOfPublishing: "1966-01-01", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236114-L.jpg" },
  { name: "The Silence of the Lambs", author: "Thomas Harris", dateOfPublishing: "1988-05-05", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236102-L.jpg" },
  { name: "The Maltese Falcon", author: "Dashiell Hammett", dateOfPublishing: "1930-10-01", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236089-L.jpg" },
  { name: "Rebecca", author: "Daphne du Maurier", dateOfPublishing: "1938-08-01", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236077-L.jpg" },
  { name: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", dateOfPublishing: "1902-04-01", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236055-L.jpg" },
  { name: "And Then There Were None", author: "Agatha Christie", dateOfPublishing: "1939-11-06", category: "Mystery", image: "https://covers.openlibrary.org/b/id/8236042-L.jpg" },

  // ---------- ROMANCE (10) ----------
  { name: "Pride and Prejudice", author: "Jane Austen", dateOfPublishing: "1813-01-28", category: "Romance", image: "https://covers.openlibrary.org/b/id/8081536-L.jpg" },
  { name: "The Notebook", author: "Nicholas Sparks", dateOfPublishing: "1996-10-01", category: "Romance", image: "https://covers.openlibrary.org/b/id/8236031-L.jpg" },
  { name: "Outlander", author: "Diana Gabaldon", dateOfPublishing: "1991-06-01", category: "Romance", image: "https://covers.openlibrary.org/b/id/8236023-L.jpg" },
  { name: "Me Before You", author: "Jojo Moyes", dateOfPublishing: "2012-01-05", category: "Romance", image: "https://covers.openlibrary.org/b/id/8236015-L.jpg" },
  { name: "The Time Traveler's Wife", author: "Audrey Niffenegger", dateOfPublishing: "2003-09-01", category: "Romance", image: "https://covers.openlibrary.org/b/id/8236002-L.jpg" },
  { name: "Jane Eyre", author: "Charlotte Brontë", dateOfPublishing: "1847-10-16", category: "Romance", image: "https://covers.openlibrary.org/b/id/8235987-L.jpg" },
  { name: "Sense and Sensibility", author: "Jane Austen", dateOfPublishing: "1811-10-30", category: "Romance", image: "https://covers.openlibrary.org/b/id/8235974-L.jpg" },
  { name: "The Rosie Project", author: "Graeme Simsion", dateOfPublishing: "2013-04-01", category: "Romance", image: "https://covers.openlibrary.org/b/id/8235969-L.jpg" },
  { name: "Call Me By Your Name", author: "André Aciman", dateOfPublishing: "2007-01-01", category: "Romance", image: "https://covers.openlibrary.org/b/id/8235960-L.jpg" },
  { name: "Love in the Time of Cholera", author: "Gabriel Garcia Marquez", dateOfPublishing: "1985-04-05", category: "Romance", image: "https://covers.openlibrary.org/b/id/8235952-L.jpg" }
];

export default books;
