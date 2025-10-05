import dashboardbooks from "../utils/dashboardbooks";
import Categories from "./Categories";
function Dashboard()
{


    return(
      
            <div className=" w-[100%] ">
                                     <h1 className="text-white text-7xl  font-bold text-center ">Welcome to the Virtual Library</h1>
                                            <p className="text-center text-4xl font-bold">----------Browse Books as You Like----------</p>

             <div className=" grid grid-cols-5 m-2 gap-3.5">

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