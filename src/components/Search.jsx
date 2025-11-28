import { useState } from "react";
import books from "../utils/books";
import { useNavigate } from "react-router-dom";
import "./Search.css"

function Search()
{
  const navigate=useNavigate()

  const [searchedbook, setSearchedbook]=useState("");
  const [newbooklist,setnewbooklist]=useState([]);
   

  function handleinput()
  {
    handlechange(searchedbook);

  }

  function handlechange(e)
  {
   
   setSearchedbook(e)

   
     const newsearchedlist= books.filter((item)=>{
         
              return (
    item.name.toLowerCase().includes(searchedbook.toLowerCase()) ||
    item.author.toLowerCase().includes(searchedbook.toLowerCase())
  );

  })
  
  console.log(newsearchedlist);
 


 async function nav()
 {
  await setnewbooklist(newsearchedlist);
   navigate("/searchlist", { state: { newbooks: newbooklist } });

 }
  nav();
  


  }

    return(
        
        <div className="flex justify-center gap-2  items-center ">

        <input type="text" onChange={(e)=>{handlechange(e.target.value)}} value={searchedbook} className=" text-white font-bold bg-gray-900 w-105 pl-2 hover:border-gray-50 p-0 h-10  
        text-2xl self-center border-1 header-search border-blue-900" placeholder="Search Books Here ...."/>
       <button onClick={handleinput} className="h-10  hover:cursor-pointer rounded-4xl flex items-center">
         <img src="./src/images/searchicon.jpg" className="h-10 " alt="" />
       </button>
        </div>
    )
}
export default Search;