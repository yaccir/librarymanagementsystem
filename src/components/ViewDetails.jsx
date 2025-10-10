import { useLocation, useNavigate, useParams } from "react-router-dom";

function ViewDetails()
{
     const {bookname,bookauthor} = useParams();
     const navigate=useNavigate();
  const location = useLocation();
  const { description, image } = location.state || {};
    return(
<div>

    <div className="flex justify-end pr-20">
        <button  onClick={()=>{navigate(-1)}} className='bg-blue-500 mt-5 m-2 w-30  h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Go-Back</button>
     <button  onClick={()=>{navigate('/')}} className='bg-blue-500 mt-5  w-30 h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Home</button>

    </div>

    <div>
        
        <div className="text-white flex justify-around items-center">
           
           <div className="">
            <img className="m-10 mt-0 ml-20 p-3 w-[30vw] h-[85vh]" src={image} alt="" />
           
            </div>
            <div className="w-[70vw] m-10 p-5 pt-0">
                <h1 className="text-2xl m-1 text-orange-200">{bookname}</h1>
                <div className="flex justify-between w-[70%]">
                    <h2 className="text-xl m-1 text-blue-200">{bookauthor}</h2>
                    <button  className='bg-blue-500 w-30 h-10 hover:cursor-pointer
     hover:text-gray-200 hover:bg-blue-700 text-white font-semibold '>Buy Now</button>
                </div>
                <h2 className="text-lg m-1 text-green-200">rating</h2>
                <p className="text-justify m-1 text-pink-100 ">{description}</p>
        </div>
        

</div>
    </div>
</div>
    )
}
export default ViewDetails;