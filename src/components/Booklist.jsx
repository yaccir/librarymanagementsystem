import { useState } from "react"
import books from "../utils/books.js"

import FictionBooks from "./FictionBooks.jsx"

export default function Booklist()
{
    console.log(books)
    const [booksData,setBooksData]=useState(books)
    return(


        <div className="flex flex-wrap justify-center items-center w-[100%]">
            {
                booksData.map((item)=>{

                 return item.category=="Fiction" && <FictionBooks 
                name={item.name} 
                author={item.author} 
                dateOfPublishing={item.dateOfPublishing} 
                description={item.description}
                price={item.price}
                image={item.image}
                />

            })
            }

        </div>
            
           

         
           
    
       
    )

}