import React from 'react'
import {Send, X, House, Building, ShieldUser, LogOut, ClipboardMinus, Settings} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({isOpen, toggleSidebar}) => {

  const menuList = [
    {icon: <House />, name: 'Dashboard', path: '/dashboard'},
    {icon: <Building />, name: 'Colleges', path: '/colleges'},
    {icon: <ShieldUser />, name: 'Admin', path: '/admin'},
    {icon: <ClipboardMinus />, name: 'Report', path: '/reports'},
    {icon: <Settings />, name: 'Setting', path: '/setting'},
    {icon: <LogOut />, name: 'Logout', path: '/logout'},
  ];

  const location = useLocation();

  return (
    <div className={`bg-gray-50 text-gray-800 h-screen w-64 fixed top-0 left-0 z-50 md:static transition-transform duration-300 border ${isOpen ? 'translate-x-0' : '-translate-x-full md:absolute'}`}>
        <div className='flex flex-row justify-between h-14 border-b p-4 items-center'>
          <div className='flex flex-row gap-1'>
            <Send className="text-xl text-primaryColor font-bold"/>
            <div className="text-xl text-primaryColor font-bold">NotifyEdu</div>
          </div>
          <X className='md:hidden cursor-pointer' onClick={toggleSidebar}/>
        </div>

        {/* Menu List */}
        <div className="flex flex-col gap-1 p-4 pt-6">
          {menuList.map(({icon, name, path}) => {
            const isActive = location.pathname.startsWith(path);
            return (
              <Link key={name} className={`flex flex-row gap-2 rounded-md hover:bg-gray-100 p-2 ${isActive ? 'bg-gray-200 font-semibold' : ''}`} to={path}>
                {icon}
                <span>{name}</span>
              </Link>
            );
          })};
        </div>
    </div>
  )
}

export default Sidebar;
