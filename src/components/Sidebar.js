import React from 'react'
import '../styles/Sidebar.css'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
function Sidebar() {
    const recents=(topic)=>{
        return(
            <div className='recents'>
                <span className='hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }
    const name=useSelector((state)=>state.name)
    const email=useSelector((state)=>state.email)
    const url_image=useSelector((state)=>state.url_image)
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img className="sidebar_top_img" src='https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg' alt=''/>
                <img src={url_image} alt='' className='header_right_avatar'/>
                    {/* <img className='image__profile' src='https://scontent.fcai19-5.fna.fbcdn.net/v/t1.6435-9/160190030_483576589494117_4534759925978735560_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bvZJsJHGNCMAX8f3Fxv&_nc_ht=scontent.fcai19-5.fna&oh=ae86f3a78d55b0539b6ed6578eacc6d7&oe=60E4FF15' alt=''/> */}
                {/* <Avatar className='sidebar_top_logo'/> */}
                <h2>{name}</h2>
                <h4>{email}</h4>
                <div className='sidebarstatus'>
                <div className='sidebarstatu'>
                    <p>Who viewd your profile</p>
                    <span className='statNumber'>500 Users</span>
                </div>
                <div className='sidebarstatu'>
                <p>Who viewd your posts</p>
                <span className='statNumber'>232 Users</span>
                </div>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recents</p>
                {recents('react js')}
                {recents('programming')}
                {recents('design')}
                {recents('developer')}
            </div>
        </div>
    )
}

export default Sidebar
