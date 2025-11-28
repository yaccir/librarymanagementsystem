import { useForm } from "react-hook-form";
import "./BookForm.css"
import {  useDispatch, useSelector } from "react-redux";
import { addBookItem, clearbookStore,deletebooklist, removeBookItem } from "../utils/bookSlice";
import BookCard from "./BookCard";
import { useState } from "react";
import Header from "./Header";
import books from "../utils/books";


function BookForm()
{
    const [selectedItems, setSelectedItems] = useState([]);
   

    const [countdel,setcountdel]=useState([]);
        const dispatch=useDispatch();
    

    const bookarray=useSelector((store)=>{
        
        return store.booksdata.bookitems;
    })

    

    const {register,
    handleSubmit,
    formState:{errors}}=useForm();

        function handlechange( value)
        {
            if(value==="")
            {
                setSelectedItems([])
                return;
            }
                else
            {
         
            const filterdata=bookarray.filter((item)=>
            item.name.toLowerCase().includes(value.toLowerCase())
            )
                    console.log(filterdata);
                    console.log(bookarray);
                    setSelectedItems(filterdata);
            }
        }






        // Promise wrapper
function convTo64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

// onsubmit ko async banao
async function onsubmit(data) {
  try {
    

    // assume data.image is a FileList or array coming from input[type=file]
    if (data.imagefile && data.imagefile.length > 0) {
      // convert first file to base64
      const base64 = await convTo64(data.imagefile[0]);
      // attach base64 to data (name it kuch bhi, e.g., imageBase64)
     
      data.image = base64;

      
     
    }

    // ab dispatch karo
    console.log("i am hit"+data)
    dispatch(addBookItem(data));
  } catch (err) {
    console.error("File conversion error:", err);
  }
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
  
        <div  >
            {/* <h1 className="text-center text-3xl font-semibold text-green-400 border-2 border-gray-400 w-[25%] ">Add Book To The Library</h1> */}
            <div>
               <Header/>
    
            </div>
<div className="flex justify-center items-center border-2 border-white   flex-wrap w-[100vw] m-auto" >

        <form action="" onSubmit={handleSubmit(onsubmit)} className="form-container"> 
            <h1 className="text-center text-3xl font-semibold  border-2 border-orange-400 
    w-[60%] m-auto mt-5 mb-5 rounded-2xl p-2">Add Book To The Library</h1>
        
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >Book Name: </label>
          {errors.name && <p>{errors.name.message}</p>}
       <input type="text" className=" input-border " {...register("name",{
        required:"Book Name Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z][A-Za-z0-9]*$/ ,message:"First leter should be Alphabet !!!"}


     })} />
   
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700  " >Book Author: </label>
          {errors.author && <p>{errors.author.message}</p>}
     <input type="text" {...register("author" ,{
        required:"Book Author Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z][A-Za-z0-9]*$/,message:"First leter should be Alphabet !!!"}


     } )} className="  input-border" />
    </div>
    <div className=" flex flex-col">
        <label htmlFor="" className=" text-2xl font-bold text-gray-700 ">Book Description: </label>
          {errors.description && <p>{errors.description.message}</p>}
     <input type="text"  className="  input-border" {...register("description",{
        required:"Book Description Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z][A-Za-z0-9]*$/,message:"First leter should be Alphabet !!!"}


     })} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor="" className=" text-2xl font-bold text-gray-700 ">Book Ratings: </label>
          {errors.ratings && <p>{errors.ratings.message}</p>}
     <input type="number"  className="  input-border" {...register("ratings",{
        required:"Book Ratings Cannot be Empty!!!",
        minLength:{value:1,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:1,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:"/^[0-9]+$/",message:"Enter Rating in numbers only 1 to 5 !!!"}


     })} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >Category: </label>
          {errors.category && <p>{errors.category.message}</p>}
     <input type="text"  className="  input-border" {...register("category",{
        required:"Book Name Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z][A-Za-z0-9]*$/,message:"First leter should be Alphabet !!!"}


     })} />
    </div>
    <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " >About: </label>
          {errors.about && <p>{errors.about.message}</p>}
     <input type="text"  className="  input-border" {...register("about",{
        required:"Book Name Cannot be Empty!!!",
        minLength:{value:5,message:"Minimum Length Should be 5 leters !!!"},
        maxLength:{value:20,message:"Maximum Lenght Should be 20 leters !!!"},
        pattern:{value:/^[A-Za-z][A-Za-z0-9]*$/,message:"First leter should be Alphabet !!!"}


     })} />
    </div>
     <div className=" flex flex-col">
        <label htmlFor=""className=" text-2xl font-bold text-gray-700 " > Book-Cover-Photo: </label>
          {errors.image && <p>{errors.image.message}</p>}
     <input type="file" accept="image/*" className="  input-border" {...register("imagefile")} />
    </div>
    <div>
        <input type="submit"   value={"Add-book"} className='bg-blue-500 submitinput w-30 h-10 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold' />
    </div>
    </form>

<div className="flex flex-wrap  m-auto mt-0 justify-center lg:w-[50%] md:w-[90%] h-[100vh] overflow-y-auto items-center border-4 border-white rounded-2xl">
  
     <div>


<div className="flex justify-center items-center border-2 border-amber-200 m-5">
        
<input type="text" onChange={(e)=>{handlechange(e.target.value)}} className="border-2 border-amber-200 text-2xl bg-amber-50  text-red-600 font-bold p-3 h-15 w-[600px] " placeholder="Search Books to Delete here......" />
  {/* <button  onClick={(e)=>{handlechange(e.target.value)}} className='bg-blue-500 w-40 h-15 hover:cursor-pointer hover:text-gray-200
     hover:bg-blue-700 text-white font-semibold text-2xl '>Search-Book</button> */}
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
                    (selectedItems.length>0 ? selectedItems:bookarray).map((item,index)=>{
    
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

 </div>
  )
}

export default BookForm;