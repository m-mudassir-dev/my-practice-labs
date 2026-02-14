import React from 'react'
import Card from "./card.jsx";

const Rightcontent = (props) => {
  return (
    <div id='right' className='flex overflow-x-auto rounded-4xl flex-nowrap gap-10 h-full w-4/5 p-5  '>
   {props.users.map(function(elem,idx){
    return <Card key={idx} id={idx} intro={elem.intro} color={elem.color} number={elem.number} img={elem.img} tag={elem.tag}  />
   })}
    </div>
  )
}

export default Rightcontent
