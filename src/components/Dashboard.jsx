import dashboardbooks from "../utils/dashboardbooks";
import Categories from "./Categories";
function Dashboard()
{


    return(
      
            <div className=" w-[100%] ">
                                     <h1 className="text-white text-3xl  font-bold  ">
                                        Welcome to the Virtual Library----------Browse Books as You Like----------</h1>

             <div className=" grid grid-cols-5 m-2 gap-0.5">

                    {
            dashboardbooks.map((item,index)=>{
                console.log(item)
                 return   <Categories key={index} category={item.category} coverImage={item.coverImage} coverBook={item.coverBook} author={item.author} />
            })
        }
                </div> 
    
        </div>
        

        
    )
}

export default Dashboard;