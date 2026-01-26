import React from 'react'
import save from '../assets/save.svg';


const Card = (props) => {
  return (
      <div className="card">
   
           <div className="top">
             <img className='a' src={props.brandLogo} alt="" />
             <button>save <img src={save} alt="" /></button>
           </div>
   
           <div className="center">
             
             <h3>{props.company}
             <span>{props.dateposted}</span></h3>
             
             <h2 className="profession">{props.post}</h2>
             <div className='tag'>
               <h4>{props.tag1}</h4>
               <h4> {props.tag2} </h4>
             </div>
           </div>
   
           <div className="bottom">
             <div>
               <h3>{props.salary}</h3>
               <p>{props.city}</p>
             </div>
             <div>
               <button className='b1'>apply now </button>
               </div>
           </div>
         </div>
  )
}

export default Card
