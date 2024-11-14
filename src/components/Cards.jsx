import React from 'react'
import big1 from '../images/bigRoom1.jpg'
import small1 from '../images/smallRoom1.jpg'
import small2 from '../images/smallRoom2.jpg'
 

const Cards = () => {
  return (
    // container
    <div className='w-full h-[120em] md:h-[55em] px-4 bg-cyan-800 text-white'>

        {/* top image container */}
        <div className='flex w-full justify-center text-center pb-10 pt-56 px-20 text-[40px] md:text-[50px] text-white'>
            "Pick a room that suits the best for your family"
        </div>

        {/* images container   */}
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-3 h-20'> 

    <div className='flex flex-col mx-auto w-full text-center  px-20 md:px-10 gap-5 items-center'>
      <div className='grid grid-cols-2 gap-4'>
       <img src={small1} className='w-full h-[150px] rounded-2xl'/>
        <img src={small1} className='w-full h-[150px] rounded-2xl'/>
        <img src={small1} className='w-full h-[200px] rounded-2xl row-span-3 col-span-2'/>
      </div>
      
        <button className='w-28 h-10 bg-blue-500 rounded-lg text-[13px]'>2 up to 3 pax</button>
        <ul className='list-disc text-left'>
        <li>Common CR</li>
        <li>Extra bed</li>
        <li>Air conditioning</li>
        <li>Free Wifi</li> 
        </ul>
    </div>

    <div className='flex flex-col mx-auto w-full text-center  px-20 md:px-10 gap-5 items-center'>
    <div className='grid grid-cols-2 gap-4'>
       <img src={big1} className='w-full h-[150px] rounded-2xl'/>
        <img src={big1} className='w-full h-[150px] rounded-2xl'/>
        <img src={big1} className='w-full h-[200px] rounded-2xl row-span-3 col-span-2'/>
      </div>
       <button className='w-28 h-10 bg-blue-500 rounded-lg text-[13px]'>9 up to 12 pax</button>
       <ul className='list-disc text-left'>
        <li>Common CR</li>
        <li>Extra bed</li>
        <li>Air conditioning</li>
        <li>Free Wifi</li>    
        </ul>
    </div>

    <div className='flex flex-col mx-auto w-full text-center  px-20 md:px-10 gap-5 items-center'>
    <div className='grid grid-cols-2 gap-4'>
       <img src={small1} className='w-full h-[150px] rounded-2xl'/>
        <img src={small1} className='w-full h-[150px] rounded-2xl'/>
        <img src={small1} className='w-full h-[200px] rounded-2xl row-span-3 col-span-2'/>
      </div>
   <button className='w-28 h-10 bg-blue-500 rounded-lg text-[13px]'>2 up to 3 pax</button>
   <ul className='list-disc text-left'>
        <li>Has own CR</li>
        <li>Extra bed</li>
        <li>Air conditioning</li>
        <li>Free Wifi</li> 
        </ul>
    </div>
    

       </div>
 
    </div>
  
  )
}

export default Cards