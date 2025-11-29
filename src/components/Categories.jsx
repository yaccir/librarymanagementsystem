import { useNavigate } from "react-router-dom"

    //Categories component to display individual category button
const Categories = ({category}) => {
const navigate=useNavigate()
function handleclick()
{
navigate(`/browsebooks/${category}`)
}



  return (
    <button onClick={()=>handleclick(category)} className='bg-blue-500 w-30 h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold'>{category}
           
    </button>
  )
}

export default Categories