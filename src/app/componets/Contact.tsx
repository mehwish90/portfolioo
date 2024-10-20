import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return(
    <div id="Contact" className='pt-32 container'>
          <h1 className='underline' >Contact US</h1>
        
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            
            <h2 className='underline' data-aos="zoom-in-down" >Get in touch</h2>
            <p className='text bg-green-300 text-[18px] pt-2' data-aos="zoom-in-down">
                Drop me a line,give me a call or send me a message by submitting the form.
            </p>
            
            
            <div className='flex gap-3 item-ceter'data-aos="zoom-in-down">
            <FaPhone  size={30}/> 03334141206
            </div>
            <div className='flex gap-3 item-ceter' data-aos="zoom-in-down">
            <MdOutlineEmail  size={30}/> kashifmehwish861@gmail.com
            </div>
            
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="zoom-in-down">
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-slate-400 border border-accent' id='name'/> 
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-down">
                <label htmlFor='email'>Email</label>
                <input type='text' className='h-[40px] bg-slate-400 border border-accent' id='email'/> 
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-down">
                <label htmlFor='message'>Message</label>
                <textarea className='bg-slate-400 border border-accent' id='message' rows={8}> </textarea>
            </div>
            <button className='bg-emerald-600 p-2 px-6'data-aos="zoom-in-down">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
