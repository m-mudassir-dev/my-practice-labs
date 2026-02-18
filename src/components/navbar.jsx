import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
  
        <div className=' px-10 py-5 flex justify-between bg-red-400 '>
        <h1 className=' font-bold text-4xl'>navbar</h1>
      <div className='underline pt-2 pr-10 flex gap-10 '>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/contact'>contact</Link>

      </div></div>
   
  )
}

export default navbar
