import React from 'react'
import Cardcontent from "./Cardcontent.jsx";


const Card = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-3xl '>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            
            <Cardcontent id={props.id} intro={props.intro} color={props.color} tag={props.tag} number={props.number}/>

        </div>
    )
}

export default Card
