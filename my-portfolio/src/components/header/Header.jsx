import React from 'react';
import logo from '../../assets/Untitled-2.png';
const Header = () => {
  return (
    <div className="flex justify-between mt-3 ">
        <div className='flex gap-3 ml-12  items-center ' >
            <img className='h-10 w-10 rounded-full'src={logo}alt="logo"/>
            <a className='font-semibold'>Santosh</a>
        </div>
        <div className='flex list-none items-center gap-8 mr-12'>
            <li href=""> Home</li>
            <li href="">About</li>
            <li href="">Skill</li>
            <li href="">Portfolio</li>
            <li href="">Contact</li>
        </div>
      
    </div>
  )
}

export default Header
