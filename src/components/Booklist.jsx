import { useState } from "react"
import books from "../utils/books.js"

import BookCard from "./BookCard.jsx"

export default function Booklist()
{
  
    const [booksData,setBooksData]=useState(books)
    return(

//displaying list of books using BookCard component
        <div className="flex flex-wrap justify-center items-center w-[100%]">
            {
                booksData.map((item)=>{

                 return  <BookCard
                name={item.name} 
                author={item.author} 
                description={item.about}
                price={item.price}
                image={item.image}
                />

            })
            }

        </div>
            
           

         
           
    
       
    )

}