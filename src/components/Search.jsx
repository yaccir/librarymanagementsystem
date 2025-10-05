function Search()
{

    return(
        
        <div className="flex justify-center gap-2 items-center ">

        <input type="text" className=" w-85 pl-2 hover:border-gray-50 p-0 h-10  
        text-2xl self-center bg-transparent border-1  border-blue-900" placeholder="Search Books Here ...."/>
       <button className="h-10 hover:cursor-pointer rounded-4xl flex items-center">
         <img src="./src/images/searchicon.jpg" className="h-10 " alt="" />
       </button>
        </div>
    )
}
export default Search;