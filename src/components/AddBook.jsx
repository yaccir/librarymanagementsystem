import { useNavigate } from "react-router-dom"

const AddBook = () => {

  const navigate=useNavigate();
  function handleclick(){
    navigate("/bookform")
  }
  return (
 <div><button onClick={handleclick} className='bg-blue-500 w-30 h-10 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold '>Add-Book</button></div>
 
  )
}

export default AddBook