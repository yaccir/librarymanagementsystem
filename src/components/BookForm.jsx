import { useForm } from "react-hook-form";
import "./BookForm.css"
import {  useDispatch, useSelector } from "react-redux";
import { addBookItem, clearbookStore,deletebooklist, removeBookItem } from "../utils/bookSlice";
import BookCard from "./BookCard";
import { useState } from "react";


function BookForm()
{

    const [searchedbooks,setsearchedbooks]=useState([]);

    const [countdel,setcountdel]=useState([]);
        const dispatch=useDispatch();
    

    const bookarray=useSelector((store)=>{
        
        return store.booksdata.bookitems;
    })

    

    const {register,
    handleSubmit,
    formState:{errors}}=useForm();

        function handlechange()
        {
            
        }

  function onsubmit(data)
  {
    dispatch(addBookItem(data));
    console.log(data);
  }
    function handledelete(item,index)
    {
        dispatch(removeBookItem([index,item]))
      

    }


    function deleteSelected(){

        if(countdel.length!==0)
        dispatch(deletebooklist(countdel))
        else
            alert("No Books Selected!!!")

        setcountdel([])
        console.log("i am called");
    }
    function deleteAll(){

        dispatch(clearbookStore())

    }


    function unselectAll(){
            setcountdel([])
    }

function toggleSelect(index) {
  
  setcountdel((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)  // If exists → Remove (Unselect)
      : [...prev, index]                // If not → Add (Select)
  );
}


  return (
  
        <div className="flex justify-center items-center  flex-wrap w-[100vw] m-auto" >
            {/* <h1 className="text-center text-3xl font-semibold text-green-400 border-2 border-gray-400 w-[25%] ">Add Book To The Library</h1> */}
    <form action="" onSubmit={handleSubmit(onsubmit)} className="form-container"> 
        
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >Book Name: </label>
       <input type="text" className=" input-border " {...register("name",{
        required:"Book Name Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z\s]+$/i,message:"Book Name should contain only letters !!!"}


     })} />
     {errors.bookname && <p>{errors.bookname.message}</p>}
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700  " >Book Author: </label>
     <input type="text" {...register("author")} className="  input-border" />
    </div>
    <div className=" flex flex-col">
        <label htmlFor="" className=" text-2xl font-bold text-gray-700 ">Book Description: </label>
     <input type="text"  className="  input-border" {...register("description")} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor="" className=" text-2xl font-bold text-gray-700 ">Book Ratings: </label>
     <input type="text"  className="  input-border" {...register("bookratings")} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >Category: </label>
     <input type="text"  className="  input-border" {...register("category")} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >About: </label>
     <input type="text"  className="  input-border" {...register("about")} />
    </div>
     <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " > Book-Cover-Photo: </label>
     <input type="file"  className="  input-border" {...register("image")} />
    </div>
    <div>
        <input type="submit"   value={"Add-book"} className='bg-blue-500 submitinput w-30 h-10 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold' />
    </div>
    </form>

<div className="flex flex-wrap  m-auto mt-5 justify-center lg:w-[50%] md:w-[90%] h-[100vh] overflow-y-auto items-center border-4 border-white rounded-2xl">
  
     <div>


<div className="flex justify-center items-center border-2 border-amber-200 m-5">
        
<input type="text" onChange={(e)=>{handlechange(e.target.value)}} className="border-2 border-amber-200 text-2xl bg-amber-50  text-black p-3 h-15 w-[600px] " placeholder="Search here......" />
  <button  onClick={(e)=>{handlechange(e.target.value)}} className='bg-blue-500 w-40 h-15 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold text-2xl '>Search-Book</button>
    </div>

{console.log(countdel)}
    {countdel.length>0 && <div className="flex flex-wrap justify-center items-center m-6 gap-2"> 

     <button onClick={deleteSelected} className='bg-blue-500 w-40 h-10 hover:cursor-pointer text-xl hover:text-red-500
     hover:bg-blue-700 text-white font-bold '>Delete-Selected</button>

    <button onClick={deleteAll} className='bg-blue-500  hover:text-red-500 w-40 h-10 hover:cursor-pointer 
     hover:bg-blue-700 text-white font-semibold text-xl '>Delete-All</button>

     <button onClick={unselectAll} className='bg-blue-500 w-40 h-10 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold text-xl '>Unselect-All</button>

    </div> }
     


     </div>
  
    
<div className="flex flex-wrap justify-center items-center " >
           {
                    bookarray.map((item,index)=>{
    
                     return  <div className=" m-2 w-[190px] h-[290px] flex flex-col " >
                      <div className="flex justify-around items-center" >
                          <input className="" type="checkbox" checked={countdel.includes(index)}  onChange={() => toggleSelect(index)} name="" id="" />
                     <button onClick={()=>{handledelete(item,index)}} className=" bg-blue- hover:cursor-pointer flex" ><div className="flex justify-center items-center ">
                             <p className="  text-2xl font-bold text-red-400">Delete </p>
                            <img src="./src/images/delete.jpg" alt=""  className=" w-[20%] rounded-3xl"/>
                        </div> </button>
                      </div>
                           
                        <BookCard
                        name={item.name} 
                        author={item.author} 
                        description={item.about}
                        price={item.price}
                        image={item.image}
                    />
                        
                     </div>
    
                })
                }
</div>
   
</div>


 </div>
  )
}

export default BookForm;