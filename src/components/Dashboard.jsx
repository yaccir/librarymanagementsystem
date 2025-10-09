import dashboardbooks from "../utils/dashboardbooks";

import Categories from "./Categories";
import PopularBooks from "./PopularBooks";
function Dashboard()
{


    return(
      
            <div className=" w-[100%] flex flex-col    bg-gray-900"> 
            <div>
                   <h1 className="text-white text-2xl  font-bold  ">
                                        Welcome to the Virtual Library</h1>
            </div>

<div className="flex  justify-around">
       <div className="w-[10%]  ">
                                     
            <h2 className="font-bold text-2xl m-2 text-green-400">Categories</h2>
                                      

             <div className="flex flex-col gap-1.5">

                    {
            dashboardbooks.map((item,index)=>{
            
                 return   <Categories key={index} category={item.category}  />
            })
        }
                </div> 
                                     </div>
                                     <div className="  flex flex-col w-[80%] h-[80vh]  overflow-y-scroll ">
                                        <h1 className="text-3xl text-green-400 font-normal text-center">Popular Books</h1>

                                        <div className="flex ">
                                        <PopularBooks/>  
                                        </div>
                                                                  

                                     </div>
</div>
         
    
        </div>
        

        
    )
}

export default Dashboard;