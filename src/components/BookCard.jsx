import { useNavigate } from "react-router-dom"
import "./BookCard.css"

export default function BookCard({name, author,description,price,image})
{

    const navigate=useNavigate()
function handleClick()
{
    
      navigate(`/books/viewdetails/${name}/${author}`, {
      state: { description, image }
    });

}


return(
    <div className=" flex border-4  m-2  border-yellow-200 flex-col justify-center items-center p-2  w-[190px] h-[200 px] hover:cursor-pointer shadow-2xl rounded-2xl ">
       
        <img src={image} alt={name} className="w-[90px] border-2 h-[130px] border-white"/>
        
             <h1 className="text-center font-bold bg-black  text-white"> {name}</h1>
         <ul>
                        <li><p className="text-white text-author text-center">by  {author}.</p></li>
      
            </ul>   
          <button onClick={handleClick} className='  w-30 h-7 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 rounded-2xl border-2 border-blue-500 text-white font-semibold '>View Details</button>
    
 
             
            
          

        
        
    </div>
)

}