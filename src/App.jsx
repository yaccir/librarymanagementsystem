import Booklist from "./components/Booklist";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import FictionBooks from "./components/FictionBooks";
import Header from "./components/Header";

import {createBrowserRouter,RouterProvider}from "react-router-dom";
import Science from "./components/Science";
import Technology from "./components/Technology";
import Philosphy from "./components/NonFiction";
import Fantasy from "./components/Fantasy";
import Biography from "./components/Biography";

import Mystery from "./components/Mystery";
import Romance from "./components/Romance";
import Scifi from "./components/Scifi";
import History from "./components/History";
import SearchList from "./components/SearchList";


export default function App()
{

const router=createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Header/>
      <Dashboard/>
    </div>
  },
  {
    path:"/dashboard",
    element:<div>
      <Header/>
      <Booklist/>
    </div>
  },
   {
    path:"/fiction",
    element:<div>
      <Header/>
      <FictionBooks/>
    </div>
  }
  ,
   {
    path:"/Science",
    element:<div>
      <Header/>
      <Science/>
    </div>
  }
  ,
   {
    path:"/History",
    element:<div>
      <Header/>
      <History/>
    </div>
  }
  ,
   {
    path:"/technology",
    element:<div>
      <Header/>
      <Technology/>
    </div>
  }
  ,
   {
    path:"/NonFiction",
    element:<div>
      <Header/>
      <Philosphy/>
    </div>
  }
  ,
   {
    path:"/fantasy",
    element:<div>
      <Header/>
      <Fantasy/>
    </div>
  }
  ,
   {
    path:"/biography",
    element:<div>
      <Header/>
      <Biography/>
    </div>
  }
  ,
   {
    path:"/Scifi",
    element:<div>
      <Header/>
      <Scifi/>
    </div>
  }
  ,
   {
    path:"/mystery",
    element:<div>
      <Header/>
      <Mystery/>
    </div>
  }
  ,
   {
    path:"/romance",
    element:<div>
      <Header/>
      <Romance/>
    </div>
  }
    ,
   {
    path:"/searchlist",
    element:<div>
      <Header/>
      <SearchList/>
    </div>
  }
]);

  return (
  
    // className="bg-[url('./src/images/background.png')] bg-cover bg-fixed bg-center h-screen w-full text-white  "
    <div className="  font-sans bg-gray-900 text-white">
      <RouterProvider router={router}>
      <div className=" m-auto w-[85%] ">
    
       
       

      </div>
      </RouterProvider>
      
    </div>
  )


}