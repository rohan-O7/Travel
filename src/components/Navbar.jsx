import React from 'react'
import Select from 'react-select'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'

const options=[
    {value:"indian",label:"INR"},
    {value:"dollar",label:"USD"},
    {value:"dirham",label:"DE"},

]


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-black'>
      <Link to='/'>
      <div className='text-2xl md:text-4xl  font-bold p-5 font-serif text-slate-50 z-10'>
      HUMSAFAR
        </div>
      </Link>
    <ul className='hidden md:flex text-white z-10 '>
        <li className='p-2 hover:underline cursor-pointer'><Link to='/home'>Home</Link> </li>
        <li className='p-2 hover:underline cursor-pointer'><Link to='/about'>About us</Link> </li>
        <li className='p-2 hover:underline cursor-pointer'><Link to='/contact'>Contact us</Link></li>
    </ul>
    <div className='hidden md:inline-block w-[180px] m-2 z-10'>
  
     <Select  options={options}
     placeholder="Currency"
   isSearchable
   styles={{
    control:(b)=>({
        ...b,
        borderColor:"neon"
    })
   }}
  
     />

    </div>
    <div>

    </div>

    </nav>
  )
}

export default Navbar
