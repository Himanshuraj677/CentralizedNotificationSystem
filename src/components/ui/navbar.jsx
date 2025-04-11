import React from 'react'
import {PanelsRightBottom, ChevronDown } from 'lucide-react'


const name = "Himanshu Raj";

const Navbar = ({type, toggleSidebar}) => {
  return (
    <header className='h-14 bg-gray-50 border-b'>
      <nav className='h-full flex items-center justify-between p-4'>
        <PanelsRightBottom className='cursor-pointer' onClick={toggleSidebar}/>
        <div className="flex flex-row h-full items-center">
          <div className="h-10 w-10 rounded-full"></div>
          <div className="">{name.substring(0, 8)} </div>
          <ChevronDown />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
