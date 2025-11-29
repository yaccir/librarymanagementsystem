import popularbooks from "../utils/popularbooks"
import BookCard from "./BookCard";
//PopularBooks component to display popular books section
function PopularBooks()
{

   
return(
    <div className="flex flex-wrap w-[100%] 
    justify-center">
        {/* //container for popular books */}
        <div className=" w-[100%] flex flex-wrap justify-center items-center">
            {
             popularbooks.map((item)=>{
        
                return  <BookCard
                                name={item.name} 
                                author={item.author} 
                                description={item.description}
                                rating={item.rating}
                                image={item.image}
                                />
    })
        }
        </div>

    </div>
)
}
export default PopularBooks;