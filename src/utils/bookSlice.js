import { createSlice } from "@reduxjs/toolkit"

import books from "./books";


const bookSlice=createSlice({
    name:"booksdata",
    initialState:{
        bookitems:  [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    dateOfPublishing: "1960-07-11",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    description: "To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill a Mockingbird by Harper Lee is a widely appreciated and influential book. To Kill",
    rating: 4.7
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    dateOfPublishing: "1925-04-10",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225636-L.jpg",
    description: "The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great Gatsby by F. Scott Fitzgerald is a widely appreciated and influential book. The Great",
    rating: 4.7
  },
  {
    name: "Catch-22",
    author: "Joseph Heller",
    dateOfPublishing: "1961-11-10",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8231850-L.jpg",
    description: "Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22 by Joseph Heller is a widely appreciated and influential book. Catch-22",
    rating: 4.7
  },
  {
    name: "Beloved",
    author: "Toni Morrison",
    dateOfPublishing: "1987-09-16",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8226198-L.jpg",
    description: "Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved by Toni Morrison is a widely appreciated and influential book. Beloved",
    rating: 4.7
  },
  {
    name: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    dateOfPublishing: "1967-05-30",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of Solitude by Gabriel Garcia Marquez is a widely appreciated and influential book. One Hundred Years of",
    rating: 4.7
  },
  {
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    dateOfPublishing: "2003-05-29",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7459251-L.jpg",
    description: "The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely appreciated and influential book. The Kite Runner by Khaled Hosseini is a widely",
    rating: 4.7
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    dateOfPublishing: "1951-07-16",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    description: "The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a widely appreciated and influential book. The Catcher in the Rye by J.D. Salinger is a",
    rating: 4.7
  },
  {
    name: "Lord of the Flies",
    author: "William Golding",
    dateOfPublishing: "1954-09-17",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8231857-L.jpg",
    description: "Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of the Flies by William Golding is a widely appreciated and influential book. Lord of",
    rating: 4.7
  },
  {
    name: "The Road",
    author: "Cormac McCarthy",
    dateOfPublishing: "2006-09-26",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
    description: "The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac McCarthy is a widely appreciated and influential book. The Road by Cormac",
    rating: 4.7
  },
  {
    name: "Atonement",
    author: "Ian McEwan",
    dateOfPublishing: "2001-07-17",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8234147-L.jpg",
    description: "Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement by Ian McEwan is a widely appreciated and influential book. Atonement",
    rating: 4.7
  },
  {
    name: "A Brief History of Time",
    author: "Stephen Hawking",
    dateOfPublishing: "1988-04-01",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    description: "A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a widely appreciated and influential book. A Brief History of Time by Stephen Hawking is a",
    rating: 4.7
  },
  {
    name: "The Selfish Gene",
    author: "Richard Dawkins",
    dateOfPublishing: "1976-03-13",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/7222241-L.jpg",
    description: "The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely appreciated and influential book. The Selfish Gene by Richard Dawkins is a widely",
    rating: 4.7
  },
  {
    name: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    dateOfPublishing: "2016-05-17",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8404184-L.jpg",
    description: "The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a widely appreciated and influential book. The Gene: An Intimate History by Siddhartha Mukherjee is a",
    rating: 4.7
  },
  {
    name: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    dateOfPublishing: "2010-02-02",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/7771121-L.jpg",
    description: "The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of Henrietta Lacks by Rebecca Skloot is a widely appreciated and influential book. The Immortal Life of",
    rating: 4.7
  },
  {
    name: "Cosmos",
    author: "Carl Sagan",
    dateOfPublishing: "1980-09-28",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8226193-L.jpg",
    description: "Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos by Carl Sagan is a widely appreciated and influential book. Cosmos",
    rating: 4.7
  },
  {
    name: "The Elegant Universe",
    author: "Brian Greene",
    dateOfPublishing: "1999-10-11",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/5032654-L.jpg",
    description: "The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely appreciated and influential book. The Elegant Universe by Brian Greene is a widely",
    rating: 4.7
  },
  {
    name: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    dateOfPublishing: "1962-01-01",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8233466-L.jpg",
    description: "The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific Revolutions by Thomas S. Kuhn is a widely appreciated and influential book. The Structure of Scientific",
    rating: 4.7
  },
  {
    name: "Silent Spring",
    author: "Rachel Carson",
    dateOfPublishing: "1962-09-27",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8233416-L.jpg",
    description: "Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel Carson is a widely appreciated and influential book. Silent Spring by Rachel",
    rating: 4.7
  },
  {
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    dateOfPublishing: "2011-10-25",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    description: "Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast and Slow by Daniel Kahneman is a widely appreciated and influential book. Thinking, Fast",
    rating: 4.7
  },
  {
    name: "The Sixth Extinction",
    author: "Elizabeth Kolbert",
    dateOfPublishing: "2014-02-11",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8236206-L.jpg",
    description: "The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely appreciated and influential book. The Sixth Extinction by Elizabeth Kolbert is a widely",
    rating: 4.7
  },
  {
    name: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    dateOfPublishing: "1997-03-01",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/10909236-L.jpg",
    description: "Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs, and Steel by Jared Diamond is a widely appreciated and influential book. Guns, Germs,",
    rating: 4.7
  },
  {
    name: "The Silk Roads",
    author: "Peter Frankopan",
    dateOfPublishing: "2015-08-27",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8472035-L.jpg",
    description: "The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely appreciated and influential book. The Silk Roads by Peter Frankopan is a widely",
    rating: 4.7
  },
  {
    name: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    dateOfPublishing: "2007-03-17",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8235016-L.jpg",
    description: "The History of the Ancient World by Susan Wise Bauer is a widely appreciated and influential book. The History of the Ancient World by Susan Wise Bauer is a widely appreciated and influential book. The History of the Ancient World by Susan Wise Bauer is a widely appreciated and influential book. The History of the Ancient World by Susan Wise Bauer is a widely appreciated and influential book. The History of the Ancient World by Susan Wise Bauer is a widely appreciated and influential book. The History of the Ancient World by Susan Wise Bauer is a widely appreciated and",
    rating: 4.7
  },
  {
    name: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    dateOfPublishing: "2005-10-25",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8232308-L.jpg",
    description: "Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of",
    rating: 4.7
  },
  {
    name: "The Wright Brothers",
    author: "David McCullough",
    dateOfPublishing: "2015-05-05",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8235721-L.jpg",
    description: "The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely",
    rating: 4.7
  },
  {
    name: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    dateOfPublishing: "1960-10-17",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8235281-L.jpg",
    description: "The Rise and Fall of the Third Reich by William L. Shirer is a widely appreciated and influential book. The Rise and Fall of the Third Reich by William L. Shirer is a widely appreciated and influential book. The Rise and Fall of the Third Reich by William L. Shirer is a widely appreciated and influential book. The Rise and Fall of the Third Reich by William L. Shirer is a widely appreciated and influential book. The Rise and Fall of the Third Reich by William L. Shirer is a widely appreciated and influential book. The Rise and Fall of",
    rating: 4.7
  },
  {
    name: "SPQR: A History of Ancient Rome",
    author: "Mary Beard",
    dateOfPublishing: "2015-10-06",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8236450-L.jpg",
    description: "SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of Ancient Rome by Mary Beard is a widely appreciated and influential book. SPQR: A History of",
    rating: 4.7
  },
  {
    name: "The Diary of a Young Girl",
    author: "Anne Frank",
    dateOfPublishing: "1947-06-25",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/10523369-L.jpg",
    description: "The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a",
    rating: 4.7
  },
  {
    name: "The Guns of August",
    author: "Barbara W. Tuchman",
    dateOfPublishing: "1962-01-01",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8233418-L.jpg",
    description: "The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a widely appreciated and influential book. The Guns of August by Barbara W. Tuchman is a",
    rating: 4.7
  },
  {
    name: "The Liberation Trilogy",
    author: "Rick Atkinson",
    dateOfPublishing: "2002-01-01",
    category: "History",
    image: "https://covers.openlibrary.org/b/id/8228778-L.jpg",
    description: "The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely appreciated and influential book. The Liberation Trilogy by Rick Atkinson is a widely",
    rating: 4.7
  },
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    dateOfPublishing: "2008-08-01",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/9251962-L.jpg",
    description: "Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely appreciated and influential book. Clean Code by Robert C. Martin is a widely",
    rating: 4.7
  },
  {
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    dateOfPublishing: "1999-10-20",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8234141-L.jpg",
    description: "The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a widely appreciated and influential book. The Pragmatic Programmer by Andrew Hunt, David Thomas is a",
    rating: 4.7
  },
  {
    name: "Design Patterns",
    author: "Erich Gamma et al.",
    dateOfPublishing: "1994-10-31",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8231909-L.jpg",
    description: "Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns by Erich Gamma et al. is a widely appreciated and influential book. Design Patterns",
    rating: 4.7
  },
  {
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    dateOfPublishing: "1990-09-01",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8234378-L.jpg",
    description: "Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to Algorithms by Thomas H. Cormen is a widely appreciated and influential book. Introduction to",
    rating: 4.7
  },
  {
    name: "The Phoenix Project",
    author: "Gene Kim, Kevin Behr, George Spafford",
    dateOfPublishing: "2013-01-10",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8236035-L.jpg",
    description: "The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and influential book. The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and influential book. The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and influential book. The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and influential book. The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and influential book. The Phoenix Project by Gene Kim, Kevin Behr, George Spafford is a widely appreciated and",
    rating: 4.7
  },
  {
    name: "You Don't Know JS (series)",
    author: "Kyle Simpson",
    dateOfPublishing: "2015-01-01",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8234495-L.jpg",
    description: "You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a widely appreciated and influential book. You Don't Know JS (series) by Kyle Simpson is a",
    rating: 4.7
  },
  {
    name: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    dateOfPublishing: "1975-01-01",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8233439-L.jpg",
    description: "The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a widely appreciated and influential book. The Mythical Man-Month by Frederick P. Brooks Jr. is a",
    rating: 4.7
  },
  {
    name: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    dateOfPublishing: "2016-04-05",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8236612-L.jpg",
    description: "Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and influential book. Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and influential book. Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and influential book. Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and influential book. Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and influential book. Algorithms to Live By by Brian Christian & Tom Griffiths is a widely appreciated and",
    rating: 4.7
  },
  {
    name: "The Soul of a New Machine",
    author: "Tracy Kidder",
    dateOfPublishing: "1981-01-01",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8235110-L.jpg",
    description: "The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a New Machine by Tracy Kidder is a widely appreciated and influential book. The Soul of a",
    rating: 4.7
  },
  {
    name: "Code Complete",
    author: "Steve McConnell",
    dateOfPublishing: "1993-06-09",
    category: "Technology",
    image: "https://covers.openlibrary.org/b/id/8234215-L.jpg",
    description: "Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve McConnell is a widely appreciated and influential book. Code Complete by Steve",
    rating: 4.7
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    dateOfPublishing: "2011-02-04",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/713jIoMO3UL-L.jpg",
    description: "Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and influential book. Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and influential book. Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and influential book. Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and influential book. Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and influential book. Sapiens: A Brief History of Humankind by Yuval Noah Harari is a widely appreciated and",
    rating: 4.7
  },
  {
    name: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    dateOfPublishing: "1946-01-01",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/61157LApbuL-L.jpg",
    description: "Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a widely appreciated and influential book. Man's Search for Meaning by Viktor E. Frankl is a",
    rating: 4.7
  },
  {
    name: "The Power of Habit",
    author: "Charles Duhigg",
    dateOfPublishing: "2012-02-28",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8234781-L.jpg",
    description: "The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power of Habit by Charles Duhigg is a widely appreciated and influential book. The Power",
    rating: 4.7
  },
  {
    name: "Outliers",
    author: "Malcolm Gladwell",
    dateOfPublishing: "2008-11-18",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8234761-L.jpg",
    description: "Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers by Malcolm Gladwell is a widely appreciated and influential book. Outliers",
    rating: 4.7
  },
  {
    name: "The Tipping Point",
    author: "Malcolm Gladwell",
    dateOfPublishing: "2000-01-01",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8234773-L.jpg",
    description: "The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely appreciated and influential book. The Tipping Point by Malcolm Gladwell is a widely",
    rating: 4.7
  },
  {
    name: "The Power of Now",
    author: "Eckhart Tolle",
    dateOfPublishing: "1997-08-19",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8094919-L.jpg",
    description: "The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power of Now by Eckhart Tolle is a widely appreciated and influential book. The Power",
    rating: 4.7
  },
  {
    name: "Freakonomics",
    author: "Steven D. Levitt & Stephen J. Dubner",
    dateOfPublishing: "2005-03-01",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8234753-L.jpg",
    description: "Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D. Levitt & Stephen J. Dubner is a widely appreciated and influential book. Freakonomics by Steven D.",
    rating: 4.7
  },
  {
    name: "Bad Blood",
    author: "John Carreyrou",
    dateOfPublishing: "2018-05-21",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8465241-L.jpg",
    description: "Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John Carreyrou is a widely appreciated and influential book. Bad Blood by John",
    rating: 4.7
  },
  {
    name: "The Art of War",
    author: "Sun Tzu",
    dateOfPublishing: "5th century BC",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8235132-L.jpg",
    description: "The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art of War by Sun Tzu is a widely appreciated and influential book. The Art",
    rating: 4.7
  },
  {
    name: "Grit",
    author: "Angela Duckworth",
    dateOfPublishing: "2016-05-03",
    category: "NonFiction",
    image: "https://covers.openlibrary.org/b/id/8236601-L.jpg",
    description: "Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit by Angela Duckworth is a widely appreciated and influential book. Grit",
    rating: 4.7
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    dateOfPublishing: "1997-06-26",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7884866-L.jpg",
    description: "Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the Sorcerer's Stone by J.K. Rowling is a widely appreciated and influential book. Harry Potter and the",
    rating: 4.7
  },
  {
    name: "The Way of Kings",
    author: "Brandon Sanderson",
    dateOfPublishing: "2010-08-31",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8235926-L.jpg",
    description: "The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way of Kings by Brandon Sanderson is a widely appreciated and influential book. The Way",
    rating: 4.7
  },
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    dateOfPublishing: "1937-09-21",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/6979866-L.jpg",
    description: "The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R. Tolkien is a widely appreciated and influential book. The Hobbit by J.R.R.",
    rating: 4.7
  },
  {
    name: "A Game of Thrones",
    author: "George R.R. Martin",
    dateOfPublishing: "1996-08-06",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8231858-L.jpg",
    description: "A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a widely appreciated and influential book. A Game of Thrones by George R.R. Martin is a",
    rating: 4.7
  },
  {
    name: "The Name of the Wind",
    author: "Patrick Rothfuss",
    dateOfPublishing: "2007-03-27",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8236619-L.jpg",
    description: "The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a widely appreciated and influential book. The Name of the Wind by Patrick Rothfuss is a",
    rating: 4.7
  },
  {
    name: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    dateOfPublishing: "2006-06-27",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8236951-L.jpg",
    description: "The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a widely appreciated and influential book. The Lies of Locke Lamora by Scott Lynch is a",
    rating: 4.7
  },
  {
    name: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    dateOfPublishing: "2006-07-17",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8235933-L.jpg",
    description: "Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The Final Empire by Brandon Sanderson is a widely appreciated and influential book. Mistborn: The",
    rating: 4.7
  },
  {
    name: "The Eye of the World",
    author: "Robert Jordan",
    dateOfPublishing: "1990-01-15",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8231860-L.jpg",
    description: "The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a widely appreciated and influential book. The Eye of the World by Robert Jordan is a",
    rating: 4.7
  },
  {
    name: "The Polar Express",
    author: "Chris Van Allsburg",
    dateOfPublishing: "1985-09-12",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8236208-L.jpg",
    description: "The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar Express by Chris Van Allsburg is a widely appreciated and influential book. The Polar",
    rating: 4.7
  },
  {
    name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    dateOfPublishing: "1950-10-16",
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8231866-L.jpg",
    description: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis is a widely appreciated and influential book. The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis is a widely appreciated and influential book. The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis is a widely appreciated and influential book. The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis is a widely appreciated and influential book. The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis is a",
    rating: 4.7
  },
  {
    name: "Becoming",
    author: "Michelle Obama",
    dateOfPublishing: "2018-11-13",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/10523369-L.jpg",
    description: "Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming by Michelle Obama is a widely appreciated and influential book. Becoming",
    rating: 4.7
  },
  {
    name: "Long Walk to Freedom",
    author: "Nelson Mandela",
    dateOfPublishing: "1994-11-12",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8235302-L.jpg",
    description: "Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk to Freedom by Nelson Mandela is a widely appreciated and influential book. Long Walk",
    rating: 4.7
  },
  {
    name: "Steve Jobs",
    author: "Walter Isaacson",
    dateOfPublishing: "2011-10-24",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8236037-L.jpg",
    description: "Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter Isaacson is a widely appreciated and influential book. Steve Jobs by Walter",
    rating: 4.7
  },
  {
    name: "The Diary of a Young Girl",
    author: "Anne Frank",
    dateOfPublishing: "1947-06-25",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/10523369-L.jpg",
    description: "The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a Young Girl by Anne Frank is a widely appreciated and influential book. The Diary of a",
    rating: 4.7
  },
  {
    name: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    dateOfPublishing: "2016-01-12",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8236616-L.jpg",
    description: "When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath Becomes Air by Paul Kalanithi is a widely appreciated and influential book. When Breath",
    rating: 4.7
  },
  {
    name: "Educated",
    author: "Tara Westover",
    dateOfPublishing: "2018-02-18",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8236628-L.jpg",
    description: "Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated by Tara Westover is a widely appreciated and influential book. Educated",
    rating: 4.7
  },
  {
    name: "The Wright Brothers",
    author: "David McCullough",
    dateOfPublishing: "2015-05-05",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8235721-L.jpg",
    description: "The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely appreciated and influential book. The Wright Brothers by David McCullough is a widely",
    rating: 4.7
  },
  {
    name: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    dateOfPublishing: "2005-10-25",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8232308-L.jpg",
    description: "Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of Rivals by Doris Kearns Goodwin is a widely appreciated and influential book. Team of",
    rating: 4.7
  },
  {
    name: "Alexander Hamilton",
    author: "Ron Chernow",
    dateOfPublishing: "2004-04-26",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8235511-L.jpg",
    description: "Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron Chernow is a widely appreciated and influential book. Alexander Hamilton by Ron",
    rating: 4.7
  },
  {
    name: "Open: An Autobiography",
    author: "Andre Agassi",
    dateOfPublishing: "2009-11-16",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/id/8237021-L.jpg",
    description: "Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely appreciated and influential book. Open: An Autobiography by Andre Agassi is a widely",
    rating: 4.7
  },
  {
    name: "Dune",
    author: "Frank Herbert",
    dateOfPublishing: "1965-08-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8100920-L.jpg",
    description: "Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune by Frank Herbert is a widely appreciated and influential book. Dune",
    rating: 4.7
  },
  {
    name: "Neuromancer",
    author: "William Gibson",
    dateOfPublishing: "1984-07-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231838-L.jpg",
    description: "Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer by William Gibson is a widely appreciated and influential book. Neuromancer",
    rating: 4.7
  },
  {
    name: "Foundation",
    author: "Isaac Asimov",
    dateOfPublishing: "1951-06-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231828-L.jpg",
    description: "Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation by Isaac Asimov is a widely appreciated and influential book. Foundation",
    rating: 4.7
  },
  {
    name: "Ender's Game",
    author: "Orson Scott Card",
    dateOfPublishing: "1985-01-15",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231810-L.jpg",
    description: "Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely appreciated and influential book. Ender's Game by Orson Scott Card is a widely",
    rating: 4.7
  },
  {
    name: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    dateOfPublishing: "1969-03-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231802-L.jpg",
    description: "The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and influential book. The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and influential book. The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and influential book. The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and influential book. The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and influential book. The Left Hand of Darkness by Ursula K. Le Guin is a widely appreciated and",
    rating: 4.7
  },
  {
    name: "Snow Crash",
    author: "Neal Stephenson",
    dateOfPublishing: "1992-06-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231754-L.jpg",
    description: "Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal Stephenson is a widely appreciated and influential book. Snow Crash by Neal",
    rating: 4.7
  },
  {
    name: "The Martian",
    author: "Andy Weir",
    dateOfPublishing: "2011-02-11",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8236604-L.jpg",
    description: "The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy Weir is a widely appreciated and influential book. The Martian by Andy",
    rating: 4.7
  },
  {
    name: "Hyperion",
    author: "Dan Simmons",
    dateOfPublishing: "1989-05-26",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231790-L.jpg",
    description: "Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion by Dan Simmons is a widely appreciated and influential book. Hyperion",
    rating: 4.7
  },
  {
    name: "The Time Machine",
    author: "H. G. Wells",
    dateOfPublishing: "1895-05-07",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231776-L.jpg",
    description: "The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time Machine by H. G. Wells is a widely appreciated and influential book. The Time",
    rating: 4.7
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    dateOfPublishing: "1932-01-01",
    category: "Scifi",
    image: "https://covers.openlibrary.org/b/id/8231762-L.jpg",
    description: "Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely appreciated and influential book. Brave New World by Aldous Huxley is a widely",
    rating: 4.7
  },
  {
    name: "Gone Girl",
    author: "Gillian Flynn",
    dateOfPublishing: "2012-06-05",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8679551-L.jpg",
    description: "Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian Flynn is a widely appreciated and influential book. Gone Girl by Gillian",
    rating: 4.7
  },
  {
    name: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    dateOfPublishing: "2005-08-01",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236150-L.jpg",
    description: "The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the Dragon Tattoo by Stieg Larsson is a widely appreciated and influential book. The Girl with the",
    rating: 4.7
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    dateOfPublishing: "2003-03-18",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236132-L.jpg",
    description: "The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da Vinci Code by Dan Brown is a widely appreciated and influential book. The Da",
    rating: 4.7
  },
  {
    name: "Big Little Lies",
    author: "Liane Moriarty",
    dateOfPublishing: "2014-07-29",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236127-L.jpg",
    description: "Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely appreciated and influential book. Big Little Lies by Liane Moriarty is a widely",
    rating: 4.7
  },
  {
    name: "In Cold Blood",
    author: "Truman Capote",
    dateOfPublishing: "1966-01-01",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236114-L.jpg",
    description: "In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely appreciated and influential book. In Cold Blood by Truman Capote is a widely",
    rating: 4.7
  },
  {
    name: "The Silence of the Lambs",
    author: "Thomas Harris",
    dateOfPublishing: "1988-05-05",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236102-L.jpg",
    description: "The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a widely appreciated and influential book. The Silence of the Lambs by Thomas Harris is a",
    rating: 4.7
  },
  {
    name: "The Maltese Falcon",
    author: "Dashiell Hammett",
    dateOfPublishing: "1930-10-01",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236089-L.jpg",
    description: "The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely appreciated and influential book. The Maltese Falcon by Dashiell Hammett is a widely",
    rating: 4.7
  },
  {
    name: "Rebecca",
    author: "Daphne du Maurier",
    dateOfPublishing: "1938-08-01",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236077-L.jpg",
    description: "Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du Maurier is a widely appreciated and influential book. Rebecca by Daphne du",
    rating: 4.7
  },
  {
    name: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    dateOfPublishing: "1902-04-01",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236055-L.jpg",
    description: "The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the Baskervilles by Arthur Conan Doyle is a widely appreciated and influential book. The Hound of the",
    rating: 4.7
  },
  {
    name: "And Then There Were None",
    author: "Agatha Christie",
    dateOfPublishing: "1939-11-06",
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/id/8236042-L.jpg",
    description: "And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a widely appreciated and influential book. And Then There Were None by Agatha Christie is a",
    rating: 4.7
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    dateOfPublishing: "1813-01-28",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8081536-L.jpg",
    description: "Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely appreciated and influential book. Pride and Prejudice by Jane Austen is a widely",
    rating: 4.7
  },
  {
    name: "The Notebook",
    author: "Nicholas Sparks",
    dateOfPublishing: "1996-10-01",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8236031-L.jpg",
    description: "The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas Sparks is a widely appreciated and influential book. The Notebook by Nicholas",
    rating: 4.7
  },
  {
    name: "Outlander",
    author: "Diana Gabaldon",
    dateOfPublishing: "1991-06-01",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8236023-L.jpg",
    description: "Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander by Diana Gabaldon is a widely appreciated and influential book. Outlander",
    rating: 4.7
  },
  {
    name: "Me Before You",
    author: "Jojo Moyes",
    dateOfPublishing: "2012-01-05",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8236015-L.jpg",
    description: "Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely appreciated and influential book. Me Before You by Jojo Moyes is a widely",
    rating: 4.7
  },
  {
    name: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    dateOfPublishing: "2003-09-01",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8236002-L.jpg",
    description: "The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time Traveler's Wife by Audrey Niffenegger is a widely appreciated and influential book. The Time",
    rating: 4.7
  },
  {
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    dateOfPublishing: "1847-10-16",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8235987-L.jpg",
    description: "Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte Brontë is a widely appreciated and influential book. Jane Eyre by Charlotte",
    rating: 4.7
  },
  {
    name: "Sense and Sensibility",
    author: "Jane Austen",
    dateOfPublishing: "1811-10-30",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8235974-L.jpg",
    description: "Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely appreciated and influential book. Sense and Sensibility by Jane Austen is a widely",
    rating: 4.7
  },
  {
    name: "The Rosie Project",
    author: "Graeme Simsion",
    dateOfPublishing: "2013-04-01",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8235969-L.jpg",
    description: "The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely appreciated and influential book. The Rosie Project by Graeme Simsion is a widely",
    rating: 4.7
  },
  {
    name: "Call Me By Your Name",
    author: "André Aciman",
    dateOfPublishing: "2007-01-01",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8235960-L.jpg",
    description: "Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a widely appreciated and influential book. Call Me By Your Name by André Aciman is a",
    rating: 4.7
  },
  {
    name: "Love in the Time of Cholera",
    author: "Gabriel Garcia Marquez",
    dateOfPublishing: "1985-04-05",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8235952-L.jpg",
    description: "Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and influential book. Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and influential book. Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and influential book. Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and influential book. Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and influential book. Love in the Time of Cholera by Gabriel Garcia Marquez is a widely appreciated and",
    rating: 4.7
  },
]
,
    },
    reducers:{
        addBookItem:(state,action)=>{
                        state.bookitems.unshift(action.payload);


                                     
        },
        removeBookItem:(state,action)=>{

           
            state.bookitems=state.bookitems.filter((item,index)=>{
                return (index!==action.payload[0])
            })

            alert(`${action.payload[1].name} Deleted Successfully!!!`)
        },

        clearbookStore:(state,action)=>{

            state.bookitems.length=0;
            alert("All Books Deleted Successfully!!!")
        },

        deletebooklist:(state,action)=>{
           

            state.bookitems=state.bookitems.filter((item,index)=>{
                return !action.payload.includes(index)
            })

            alert("Selected Books Deleted Successfully!!!")


        }
    }
})

export default bookSlice.reducer;
export const{addBookItem,removeBookItem, deletebooklist,clearbookStore}=bookSlice.actions