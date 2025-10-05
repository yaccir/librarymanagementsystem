export default function BookCard({bookname, bookauthor,dateofPublishing,description,price,image})
{

return(
    <div className="flex flex-col justify-center items-center m-10 w-[300px] h-[60%] hover:cursor-pointer shadow-2xl rounded-2xl pt-3 p-2">
       
        <img src={image} alt={bookname} className="w-[100%] border-2 h-50 border-white"/>
        <div>
             <h1 className="font-bold text-xl text-center bg-black h-8 text-white">{bookname}</h1>
         <ul>
            <li><p className="font-bold  text-blue-700">Author: {bookauthor}.</p></li>
            <li><p className="font-bold  text-gray-700">Published: {dateofPublishing}.</p></li>
            <li><p className="font-bold  text-gray-700">Description: {description}.</p></li>
            <li>  <h3 className="font-bold  text-gray-700"> Price: ${price}/-</h3></li>
            </ul>   
             
            
          

        </div>
        
    </div>
)

}