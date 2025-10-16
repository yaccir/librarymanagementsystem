import Booklist from "./components/Booklist";

import Dashboard from "./components/Dashboard";

import Header from "./components/Header";

import {createBrowserRouter,RouterProvider}from "react-router-dom";

import SearchList from "./components/SearchList";
import { BrowseBooks } from "./components/BrowseBooks";
import ViewDetails from "./components/ViewDetails";
import Errorpage from "./components/Errorpage";
import BookForm from "./components/BookForm";
import { Provider } from "react-redux";
import bookstore from "./utils/bookstore";


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
    path:"/browsebooks",
    element:<div>
      <Header/>
         <BrowseBooks/>
    </div>
  },
  {
    path:"/browsebooks/:category",
    element:<div>
      <Header/>
     
     <BrowseBooks/>
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
    ,
   {
  path: "/books/viewdetails/:bookname/:bookauthor",
  element: <ViewDetails />
},
{
  path:"/bookform",
  element: <div>
    <Provider store={bookstore}>
    <BookForm/>
    </Provider>
  </div>
}
   ,
   {
  path: "/*",
  element: <Errorpage/>
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