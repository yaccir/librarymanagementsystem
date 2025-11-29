import { useNavigate } from "react-router-dom"
//Errorpage component to display 404 error page
export default function Errorpage()
{

    const navigate=useNavigate()
    return(

        <div className="flex flex-col justify-center items-center m-auto w-[100%] h-[100%]">
              <div className="flex justify-end pr-20">
        <button  onClick={()=>{navigate(-1)}} className='bg-blue-500 mt-5 m-2 w-30  h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Go-Back</button>
     <button  onClick={()=>{navigate('/')}} className='bg-blue-500 mt-5  w-30 h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Home</button>

    </div>

            <div className="flex justify-center items-center m-auto w-[100%] h-[100%]">
                <img className="h-[80vh] w-[50vw]" src="../src/images/404.png" alt="error image" />
            </div>
        </div>
    )
}