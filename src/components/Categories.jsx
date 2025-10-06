import { useNavigate } from "react-router-dom"


const Categories = ({category,coverImage,coverBook,author}) => {
const navigate=useNavigate()
function handleclick()
{
navigate(`/${category}`)
}


  return (
    <div onClick={()=>handleclick(category)} className="w-[200px]  cursor-pointer rounded-2xl h-[200px] justify-center items-center  flex flex-col m-1 p-1 border-2 border-white
     bg-black opacity-90">
        
        <div>
             <h2 className=" text-xl font-bold text-center">{category}</h2>
            <img src={coverImage} alt="image" className="w-40 h-20 m-2 object-cover rounded-lg shadow-md" />

        </div>
        
        <h2 className='font-bold text-center'>{coverBook}</h2>
        <h3 className=''>by {author}</h3>

    
    </div>
  )
}

export default Categories