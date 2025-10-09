import { useParams } from "react-router-dom"
import books from "../utils/books"
import BookCard from "./BookCard"
import Science from "./Science"
import FictionBooks from "./FictionBooks"
import History from "./History"
import Technology from "./Technology"
import NonFiction from "./NonFiction"
import Fantasy from "./Fantasy"
import Biography from "./Biography"
import Scifi from "./Scifi"
import Mystery from "./Mystery"
import Romance from "./Romance"
import browsebooks from "../utils/browsebooks"
import Categories from "./Categories"
import dashboardbooks from "../utils/dashboardbooks"


export function BrowseBooks()
{
 

    const {category}=useParams()
    
   
    return(
        
       <div >
            {

                category===undefined &&  <div className="flex flex-wrap justify-center mt-6">
                 {browsebooks.map((item,index)=>{

                           return <div className="w-[250px] m-3 h-[300px] border-2 border-yellow-300">
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