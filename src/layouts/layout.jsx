import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/navbar/platformAdmin'
import Sidebar from '../components/ui/sidebar'
import BreadCrumb from '../components/ui/breadCrumb'

const Dashboard = () => {

  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div className='flex flex-row h-screen'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSideBarOpen(prev => !prev)}/>
      <div className='flex flex-col flex-1 bg-gray-50'>
        <Navbar toggleSidebar={() => setIsSideBarOpen(prev => !prev)}/>
        <div className="flex flex-1 flex-row">
          <main className='bg-gray-50 flex-1 h-full'>
            <BreadCrumb />
            <Outlet />
          </main>
        </div>
      </div> 
    </div>
  )
}

export default Dashboard;
