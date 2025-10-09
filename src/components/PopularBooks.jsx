import popularbooks from "../utils/popularbooks"
import BookCard from "./BookCard";
function PopularBooks()
{

   
return(
    <div className="flex flex-wrap w-[100%] 
    justify-center">
        <div className=" w-[100%] flex flex-wrap justify-center items-center">
            {
             popularbooks.map((item)=>{
        
                return  <BookCard
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

    </div>
)
}
export default PopularBooks;