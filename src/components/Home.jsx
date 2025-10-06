import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
  function handleclick()
  {
    navigate("/");
  }
  
  return (
    <div>
        <div><button onClick={handleclick} className='bg-blue-500 w-15 h-10 hover:cursor-pointer hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Home</button></div>
  
    </div>
  )
}

export default Home