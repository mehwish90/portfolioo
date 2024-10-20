import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

const data=[
    {
        id:0,
        title:"Calculator",
        desc:" Basic CSS , HTML and Typescript app",
        img:"/Capture 6.jpg",
        tags:["HTML","Node","Css","Typescript"]
    },

   
    {
      id:1,
      title:"Countdow Timmer",
      desc:"Next.js and Typescript powerd website ",
      img:"/Capture3.jpg",
      tags:["Next.js","Node","Css","Typescript"]
  },
  {
    id:2,
    title:"My Todo App",
    desc:"Recat and Typescript  based app",
    img:"/Capture2.jpg",
    tags:["React","Node","Css","Typescript"]
},
{
  id:3,
  title:"Sharable Resume ",
  desc:"Typescript baser iteractive resume with Html and css",
  img:"/Capture 7.jpg",
  tags:["HTML","Node","Css","Typescript"]
},
{id:4,
  title:"Currency Conventer ",
  desc:"Simple HTML and Typescript  powerd tool convert currency",
  img:"/Capture 5.jpg",
  tags:["Next.js","Node","Css","Typescript"]
},
{id:5,
  title:"Static Resume",
  desc:"Typescript baser iteractive resume with Html and css",
  img:"/Capture1.jpg",
  tags:["Next.js","Node","Css","Typescript"]
},
]


const Projects = () => {
  return (
    <div id="Projects"className='container pt-32 '>
     <h1 className='underline' >MY PROJECTS</h1>
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Cards
        
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
          
        
        
        />))}
     </div>
    </div>
  )
}

export default Projects
