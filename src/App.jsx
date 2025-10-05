import Booklist from "./components/Booklist";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";


export default function App()
{

  return (
  
    <div className="bg-[url('./src/images/background.png')] bg-cover bg-fixed bg-center h-screen w-full text-white  ">
      <div className=" m-auto w-[85%] ">
        <Header/>
        <Dashboard/>

      </div>
      
    </div>
  )


}