import { useLocation } from "react-router-dom"
import BookCard from "./BookCard.jsx"

export default function SearchList()
{
    const location=useLocation();
    const newbooks=location.state?.newbooks||[];
console.log(newbooks);
  
    return(


        <div className="flex flex-wrap justify-center items-center w-[100%]">
           
     
{
           
               newbooks.length>0? 
                newbooks.map((item)=>{

                 return  <BookCard
                name={item.name} 
                author={item.author} 
                dateOfPublishing={item.dateOfPublishing} 
                description={item.description}
                price={item.price}
                image={item.image}
                />

            }): <h1>no book found </h1>
        
}
            

        </div>
            
           

         
           
    
       
    )

}