import { useNavigate, useParams } from "react-router-dom"
import books from "../utils/books"
import BookCard from "./BookCard"

import browsebooks from "../utils/browsebooks"
import Categories from "./Categories"
import dashboardbooks from "../utils/dashboardbooks"


export function BrowseBooks()
{

    const navigate=useNavigate();
    function handleClick(category)
    {
        navigate(`/browsebooks/${category}`)
    }
 

    const {category}=useParams()
    
   
    return(
        
       <div >
            {

                category===undefined &&  <div className="flex flex-wrap justify-center mt-6">
                 {browsebooks.map((item,index)=>{

                           return <div className="w-[250px] m-3 h-[320px] border-2 flex flex-col justify-center items-center border-yellow-300">
                                <h1 className="text-white text-3xl text-center ">{item.category}</h1>
                                <div className="flex justify-center items-center">
                                     <BookCard
                                                                bookname={item.name} 
                                                                bookauthor={item.author} 
                                                                dateofPublishing={item.dateOfPublishing} 
                                                                description={item.description}
                                                                price={item.price}
                                                                image={item.image}
                                                    />
                                </div>
                                <button  onClick={(e)=>{handleClick(item.category)}}  className='bg-blue-500 w-[100%] h-12 text-lg hover:cursor-pointer
     hover:text-gray-200  hover:bg-blue-700 text-white font-semibold '>View More</button>
    
                            </div>

                 })}
                </div>
            }


        {
            category !=undefined && <div>
                <div className="flex flex-wrap justify-center gap-1.5">
                    
                    {
            dashboardbooks.map((item,index)=>{
            
                 return   <Categories key={index} category={item.category}  />
            })
        }
                </div>
                          <div>
                < h1  className="text-3xl text-green-300 text-center">{category} Books</ h1 >
            </div>
            <div className="flex flex-wrap justify-center">
                {
                 books.map((item)=>{
                      return  item.category==category&&  <BookCard
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
        </div>
        }
       </div>
    )
}