import React from 'react'
import Dashboard from './Dashboard';

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1 className='text-5xl font-bold px-6 py-4'>Employee Management System</h1>
      <div>
        <button className='rounded-2xl text-xl bg-blue-600 ml-16 p-3 mt-4' onClick={()=> setIsAdding(true)}>Add Employee</button>
      </div>

    
    </header>
  )
  
}

export default Header;