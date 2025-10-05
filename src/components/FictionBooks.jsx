
import BookCard from "./BookCard.jsx"


function FictionBooks( {name,author,dateOfPublishing,description,price,image})
{

                  return  (
                    <div>

                        <h1 >Fiction Books</h1> 
                  
                  <BookCard
                            bookname={name} 
                            bookauthor={author} 
                            dateofPublishing={dateOfPublishing} 
                            description={description}
                            price={price}
                            image={image}
                />
                    </div>
                  )

    


}
export default FictionBooks;