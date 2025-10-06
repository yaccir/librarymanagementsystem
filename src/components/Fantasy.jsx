
import BookCard from "./BookCard.jsx"
import books from "../utils/books.js";

function Fantasy( )
{

                  return  (
                    <div className="flex flex-wrap items-center justify-center">

                       
                  
                  {
                    books.map((item)=>{
                      return  item.category=="Fantasy"&&  <BookCard
                            bookname={item.name} 
                            bookauthor={item.author} 
                            dateofPublishing={item.dateOfPublishing} 
                            description={item.description}
                            price={item.price}
                            image={item.image}
                />
                 


                    })
                  }
                </div>
                  )

    


}
export default Fantasy;