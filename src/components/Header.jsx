import React from 'react'
import Search from './Search'
import Browse from './Browse'
import Home from './Home'
import AddBook from './AddBook'

const Header = () => {
  return (
    <div>
        <header className='flex justify-start h-20 items-center w-[100%]'>
        <div className="flex  items-center w-[30%]">
          <img src="./src/images/icon.png" alt="" className="w-15  rounded-2xl bg-transparent" />
          <h1 className=" text-3xl font-semibold">Online Library</h1>
          
        </div>
        <nav className=' flex justify-end mr-4 items-center w-[70%] '>
            <ul className='flex justify-between items-center '>
                <li className=' flex items-center '><Search/></li>
               <div className='flex w-[50%] justify-end gap-1.5 items-center '>
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