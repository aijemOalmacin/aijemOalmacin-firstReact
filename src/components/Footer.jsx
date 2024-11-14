import React from 'react'

const Footer = () => {
  return (
    <div className='bg-transparent  w-full mx-auto flex grid grid-cols-3 text-white'>
        <div className=' w-full flex-col mx-auto pl-3 shadow-2xl'>
            <h1 className='pb-4 text-[25px]'>Get in touch</h1>
                <ul className='flex flex-col justify-center gap-2'>
                    <li className=''>Facebook</li>
                    <li className=''>Instagram</li>
                    <li className=''>Telegram</li>
                </ul>
        </div>
        <div className=' w-full flex-col mx-auto pl-3 shadow-2xl'>
            <h1 className='pb-4 text-[25px]'>Services</h1>
                <ul className='flex flex-col justify-center  gap-2'>
                    <li className=''>Cooking </li>
                    <li className=''>Tour</li>
                    <li className=''>Shop</li>
                </ul>
        </div>
        <div className=' w-full flex-col mx-auto pl-3 shadow-2xl'>
            <h1 className='pb-4 text-[25px]'>Contacts</h1>
                <ul className='flex flex-col justify-center  gap-2'>
                    <li className=''>+639(192792739)</li>
                    <li className=''>aijemalmacin2020@gmail.com</li>
                    <li className=''>Hernan Cortes St, Sarga Compound, 6014, Mandaue City</li>
                </ul>
        </div>
     
        <div className='col-start-1 col-end-4 text-center py-2'>
            <p>Copyright © 2024 TERAVAULT, INC. dba TeraVault Software. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer