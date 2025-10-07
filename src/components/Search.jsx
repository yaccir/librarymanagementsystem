import { useState } from "react";
import books from "../utils/books";
import { useNavigate } from "react-router-dom";
function Search()
{
  const navigate=useNavigate()

  const [searchedbook, setSearchedbook]=useState("");
  const [newbooklist,setnewbooklist]=useState([]);


  function handlechange(e)
  {
   
   setSearchedbook(e.target.value)

   
     const newsearchedlist= books.filter((item)=>{
         
             if(item.name||item.author==searchedbook.includes())
      return item;

  })


 async function nav()
 {
  await setnewbooklist(newsearchedlist);
   navigate("/searchlist", { state: { newbooks: newbooklist } });

 }
  nav();
  
  
 


  }

    return(
        
        <div className="flex justify-center gap-2  items-center ">

        <input type="text" onChange={handlechange} value={searchedbook} className=" text-white font-bold bg-gray-900 w-105 pl-2 hover:border-gray-50 p-0 h-10  
        text-2xl self-center border-1  border-blue-900" placeholder="Search Books Here ...."/>
       <button className="h-10 hover:cursor-pointer rounded-4xl flex items-center">
         <img src="./src/images/searchicon.jpg" className="h-10 " alt="" />
       </button>
        </div>
    )
}
export default Search;