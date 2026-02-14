import React from 'react'
import Arrowcard from "../../assets/arrowcard.svg";
const Cardcontent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full  px-8 py-5 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-bold '>{props.id + 1}</h2>
                <div>
                    <p className='text-lg leading-normal mb-10 text-white'> {props.intro}</p>

                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className=' text-white font-semibold text-lg rounded-full px-2 '>{props.tag}</button>
                        <button className='bg-blue-400 text-white font-semibold text-lg rounded-full px-2 py-2 rotate-180' ><img src={Arrowcard} alt="" /></button>
                    </div>
                </div>

            </div>
  )
}

export default Cardcontent
