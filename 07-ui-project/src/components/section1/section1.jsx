import React from 'react'
import Navbar from "./navbar";
import Page1content from './page1content'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white-400'>
      <Navbar/>
      <Page1content users={props.users}/>
    </div>
  )
}

export default Section1
