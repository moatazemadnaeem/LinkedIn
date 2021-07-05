import React from 'react'
import '../styles/FeedOpts.css'
function FeedOpts({Icon,title,color}) {
    return (
        <div className='feed_opts'>
            {Icon&&<Icon style={{color:color}}/>}
          
            <h4>{title}</h4>
        </div>
    )
}

export default FeedOpts
