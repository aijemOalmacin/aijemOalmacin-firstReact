import React, {useState} from 'react'
import { TfiClose, TfiAlignRight } from "react-icons/tfi";
const Navbar = () => {
    const [nav, setNav]=useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='bg-slate-900 text-white flex fixed w-full justify-between items-center h-16 z-50'>
        <h1 className='w-full text-5xl font-logo text-sky-300  px-4'>Villa C</h1>
        <ul className='hidden md:flex pr-10 uppercase text-sky-300'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Rooms</li>
            <li className='p-4'>Places</li>
            <li className='p-4'>Services</li>
        </ul>

        <div onClick={handleNav} className='px-5 md:hidden'>
            {!nav ? <TfiAlignRight size={30}/> : <TfiClose size={30} color='white'/>}
        
        </div>
        <div className={nav ? 'fixed top-0 h-full bg-slate-600 transition duration-500 z-10': ' hidden'}>
        <h1 className='w-full pt-4 text-5xl font-logo text-sky-300 px-4'>Villa Conchita</h1>

        <ul className='w-[300px] pt-20 text-sky-300 uppercase'>
            <li className='p-4 border-b-[1px] border-b-blue-400'>Home</li>
            <li className='p-4 border-b-[1px] border-b-blue-400'>Rooms</li>
            <li className='p-4 border-b-[1px] border-b-blue-400'>Places</li>
            <li className='p-4 border-b-[1px] border-b-blue-400'>Services</li>
        </ul>
        </div>
    </div>
    
  )
}

export default Navbar