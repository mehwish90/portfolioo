import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-5xlfont-medium bg-emerald-500'>..Mk..</div>
            <ul className='gap-10 lg:-16 hidden md:flex'>
                <li className='menulink'><a href='#heroo'>Home </a></li>  
                 <li className='menulink'><a href='#About'>About</a></li>
                <li className='menulink'><a href='#Projects'>Projects</a></li>
                <li className='menulink'><a href='#Skills'>Skills</a></li>
                <li className='menulink'><a href='#Contact'>Contact</a></li>
            </ul>
            <RiMenu2Line className='md:hidden size[30]' />
        </div>
      
    </div>
  )
}

export default Navbar
