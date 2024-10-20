import React from 'react'
import Navbar from './Navbar'
const Heroo = () => {
  return (
    
      <div id="hero" className=' min-h-screen  bg-no-repeat bg-[url(/Untitled.jpeg)]  bg-cover '
    style={{backgroundSize:"35%",backgroundPosition:" left 100px top 100px"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
   
   <div
    className='hidden lg:block'> </div>  
    <div className='  text-xl w-6 sm:text-[130px]  font-bold leading-tight flex justify-items-stretch items-right'>
       <div>
       
       
        <p   className=" p1" data-aos="zoom-in-down" text-teal-500>Mehwish</p>
        <p   className=" p1" data-aos="zoom-in-down" text-teal-500>Kashif</p>
        <p  className=" p1" data-aos="zoom-in-down"  text-teal-500 >Here</p>
        </div>
        
        
</div>
        </div></div>
  )
}

export default Heroo
