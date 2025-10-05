import { useState } from "react"
import books from "../utils/books.js"
import BookCard from "./BookCard.jsx"

export default function Booklist()
{
    console.log(books)
    const [booksData,setBooksData]=useState(books)
    return(

            booksData.map((item)=>{


                 return   <BookCard 
                bookname={item.name} 
                bookauthor={item.author} 
                dateofPublishing={item.dateOfPublishing} 
                description={item.description}
                price={item.price}
                image={item.image}
                />

            })
           

         
           
    
       
    )

}