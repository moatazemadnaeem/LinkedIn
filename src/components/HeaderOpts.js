import React from 'react'
import '../styles/HeaderOpts.css'
function HeaderOpts({imgsrc,Icon,title}) {
    return (
        <div className='headerOpts'> 
            {Icon&&<Icon className='header_right_icon'/>}
            {imgsrc&&<img src={imgsrc} alt='' className='header_right_avatar'/>}
            <h5 className='title'>{title}</h5>
        </div>
    )
}

export default HeaderOpts
