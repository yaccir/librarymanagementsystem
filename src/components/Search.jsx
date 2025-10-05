function Search()
{

    return(
        
        <div className="flex justify-center gap-2  items-center ">

        <input type="text" className=" text-white font-bold bg-gray-900 w-190 pl-2 hover:border-gray-50 p-0 h-10  
        text-2xl self-center border-1  border-blue-900" placeholder="Search Books Here ...."/>
       <button className="h-10 hover:cursor-pointer rounded-4xl flex items-center">
         <img src="./src/images/searchicon.jpg" className="h-10 " alt="" />
       </button>
        </div>
    )
}
export default Search;