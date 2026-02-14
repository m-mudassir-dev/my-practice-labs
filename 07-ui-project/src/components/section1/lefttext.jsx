import React from 'react'

import Herotext from "./herotext";
import Img from "./img";


const Lefttext = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/4 bg-white-600 '>
            <Herotext/>
            <Img/>
           
        </div>
    )
}

export default Lefttext
