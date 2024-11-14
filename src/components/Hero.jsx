import React from 'react'
import pic4 from '../images/pic4.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import vid2 from '../video/video-2.mp4'


const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-row'>
        <video src={vid2} autoPlay loop muted/>
        <div className='w-full z-0'>
        <img src={pic4} className='h-[50%] w-[20%] absolute top-64 rounded-lg'/>
        <img src={pic2} className='h-[50%] w-[20%] absolute top-24 left-1/4 rounded-lg'/>
        <img src={pic3} className='h-[60%] w-[20%] absolute top-2/3 left-1/4 rounded-lg'/>
        </div>
 
        <div className='w-[110em] flex flex-col text-center justify-center p-10 gap-2 text-white'>
        <h1 className='text-[50px] font-[serif]'>We provide the best experience!</h1>
        <p className='text-[20px]'><em>Maximize the fun and explore Camotes here with us.</em></p>
        <button className='bg-blue-400 w-[100px] h-[40px] mx-auto rounded-lg'>Book now</button>
        </div>
   
     
    </div>
  )
}

export default Hero