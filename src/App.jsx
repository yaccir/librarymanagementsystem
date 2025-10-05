import Booklist from "./components/Booklist";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App()
{

  return (
  
    <div className="w-[75%] m-auto  mt-4 rounded-2xl ">
      <Header/>
  
      <Booklist/>
    </div>
  )


}