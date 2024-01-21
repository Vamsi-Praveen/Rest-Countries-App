import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <div className='px-[5%] h-[60px] flex items-center w-full justify-between border-b dark:border-darkGrey bg-white dark:bg-darkBlue sticky top-0 left-0 z-10 shaodow-lg'>
        <Link to="/">
          <h1 className='md:text-2xl font-medium tracking-wide text-[16px] dark:text-white'>Where in the World?</h1>
        </Link>
        <div className='flex items-center justify-center gap-2  py-2 px-3 rounded-sm cursor-pointer' onClick={toggleTheme}>
          <i className='mt-1 cursor-pointer fi fi-rs-moon-stars dark:text-white'></i>
          <span className='hidden md:block md:text-[14px] dark:text-white'>Dark Mode</span>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
