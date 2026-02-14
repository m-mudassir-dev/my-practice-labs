import React from 'react'
import Lefttext from "./lefttext";
import Rightcontent from "./rightcontent";

const Page1content = (props) => {
    return (
        <div className='flex items-center gap-10 pt-8 h-[80vh] bg-white-900 px-16'>
            <Lefttext />
            <Rightcontent users={props.users} />
        </div>
    )
}

export default Page1content