import { useNavigate } from "react-router-dom";

const Browse = () => {


const navigate=useNavigate()
  function handleClick()
  {
    navigate("/dashboard")
  }

  return (
    <div><button  onClick={handleClick} className='bg-blue-500 w-30 h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Browse-Books</button>
    
     </div>
  )
}

export default Browse