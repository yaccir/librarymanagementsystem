import { useState } from "react";
import books from "../utils/books";
import { useNavigate } from "react-router-dom";
import "./Search.css"
import { set } from "react-hook-form";
//Search component to handle book search functionality
function Search()
{
  const navigate=useNavigate()

  const [searchedbook, setSearchedbook]=useState("");
  const [newbooklist,setnewbooklist]=useState([]);
   
//function to handle input change and search
  function handleinput()
  {
    handlechange(searchedbook);

  }
//function to filter books based on search input
  function handlechange(e)
  {
  
    async function setvalue()
    {
        await setSearchedbook(e);
    }
    setvalue();
 

  
     const newsearchedlist= books.filter((item)=>{
         
              return (
    item.name.toLowerCase().includes(searchedbook.toLowerCase()) ||
    item.author.toLowerCase().includes(searchedbook.toLowerCase())
  );

  })
  
  console.log(newsearchedlist);
 

//navigating to search results page with filtered books
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