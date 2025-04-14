import React from 'react'
import { Send } from 'lucide-react';

// Student Navbar

const Student = () => {
  return (
    <header>
        <nav>
            <div className='flex flex-row gap-1'>
                <Send className="text-xl text-primaryColor font-bold"/>
                <div className="text-xl text-primaryColor font-bold">NotifyEdu</div>
            </div>
        </nav>
    </header>
  )
}

export default Student;
