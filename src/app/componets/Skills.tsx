import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <div  id ="Skills"className='container pt-32'>
        <div className='gird md:grid-cols-2 gap-20 items-center'>
      <div data-aos="zoom-in-down">
        <h1 className='underline' >Skills</h1>
        
       
      </div><div>
      <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-z'>
            <h2  className='h2' data-aos="zoom-in-down" >Typescript</h2>
            <h2 className='h2' data-aos="zoom-in-down">React .js</h2>
            <h2 className='h2' data-aos="zoom-in-down">Next.js</h2>
        </div>
        <div className='space-y-z'>
            <h2 className='h2 'data-aos="zoom-in-down">Tailwind</h2>
            <h2 className='h2 'data-aos="zoom-in-down">css</h2>
            <h2 className='h2 'data-aos="zoom-in-down">Node.js</h2>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Skills
