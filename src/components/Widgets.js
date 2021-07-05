import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import Brightness1Icon from '@material-ui/icons/Brightness1';
function Widgets() {
   const widgetsNews=(heading,title)=>{
       return(
           <div className='widgetsNews'>
                <div className='widgetsNewsLeft'>
                <Brightness1Icon className='widgetsNewsIcon'/>
                </div>
                <div className='widgetsNewsLeft'>
                <h4>{heading}</h4>
                <p>{title}</p>
                </div>
           </div>
       )
   }
    return (
        <div className='widgets'>
            <div className='widgets_header'>
            <h2>Linkedin news</h2>
            <InfoIcon/>
            </div>
            {widgetsNews('building linkedin','moataz build this website from scratch what an amazing person')}
            {widgetsNews('building linkedin','moataz build this website from scratch what an amazing person')}
            {widgetsNews('building linkedin','moataz build this website from scratch what an amazing person')}
            {widgetsNews('building linkedin','moataz build this website from scratch what an amazing person')}
        </div>
    )
}

export default Widgets
