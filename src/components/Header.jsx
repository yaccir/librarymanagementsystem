import React from 'react'
import Search from './Search'
import Browse from './Browse'

const Header = () => {
  return (
    <div>
        <header className='flex justify-start h-20 items-center w-[100%]'>
        <div className="flex  items-center w-[30%]">
          <img src="./src/images/icon.png" alt="" className="w-15  rounded-2xl bg-transparent" />
          <h1 className=" text-3xl font-semibold">Online Library</h1>
          
        </div>
        <nav className=' flex justify-start items-center w-[70%] '>
            <ul className='flex gap-2.5  items-center w-[100%]'>
                <li className=' flex items-center  w-[80%]  '><Search/></li>
                <li className=' flex items-center w-[20%]'><Browse/></li>
            </ul>
          
        </nav>
      </header>
    </div>
  )
}

export default Header