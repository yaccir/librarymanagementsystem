function Search()
{

    return(
        
        <div className="flex justify-center gap-2 items-center  w-[100%]">

        <input type="text" className=" p-0 h-10 w-[90%] text-2xl self-center bg-transparent border-4  border-blue-900" placeholder="enter text"/>
       <button className="h-10 rounded-4xl flex items-center w-[10%]">
         <img src="./src/images/searchicon.jpg" className="h-10 " alt="" />
       </button>
        </div>
    )
}
export default Search;