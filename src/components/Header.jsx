import React from 'react'
import Search from './Search'
import Browse from './Browse'
import Home from './Home'
import AddBook from './AddBook'
//Header component to display the header section of the application
const Header = () => {
  return (
    <div>
      {/* //header section */}
        <header className='flex justify-start h-20 items-center w-[100%]'>
        <div className="flex  items-center gap-2 w-[30%]">
          <img src="./src/images/icon.png" alt="" className="w-15  rounded-2xl bg-transparent" />
          <h1 className=" text-3xl text-white font-semibold">Online Library</h1>
          
        </div>
        {/* //navigation menu */}
        <nav className=' flex justify-end mr-4 items-center w-[70%] '>
            <ul className='flex justify-between items-center '>
                <li className=' flex items-center '><Search/></li>
               <div className='flex w-[50%] justify-end ml-3 gap-1.5 items-center '>
                 <li className=' flex items-center  '><Home/></li>
                <li className=' flex items-center '><Browse/></li>
                 <li className=' flex items-center'><AddBook/></li>
               </div>
                
            </ul>
          
        </nav>
      </header>
    </div>
  )
}

export default Header