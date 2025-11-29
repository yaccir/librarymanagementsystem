import { useNavigate } from "react-router-dom"
//importing navigation hook from react-router-dom
const AddBook = () => {
//navigation hook
  const navigate=useNavigate();
  function handleclick(){
    navigate("/bookform")
  }
  return (
 <div><button onClick={handleclick} className='bg-blue-500 w-40 h-10 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold '>Add/Delete-Book</button></div>
 
  )
}

export default AddBook