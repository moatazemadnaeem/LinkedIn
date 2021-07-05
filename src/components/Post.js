import React from 'react'
import '../styles/Post.css'

import FeedOpts from './FeedOpts'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import {useSelector} from 'react-redux'
function Post({name,discription,message,photourl}) {
    const url_image=useSelector((state)=>state.url_image)
    return (
        <div className='post'>
            <div className='post_header'>
            <img src={url_image} alt='' className='header_right_avatar'/>
                <div className='post_info'>
                <h2>{name}</h2>
                <p>{discription}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
                
            </div>
            <div className='post__photourl'>
                   <img src={photourl} alt=''/>
            </div>
         
         {/* options */}
         <div className='post_opts'>
         <FeedOpts Icon={ThumbUpAltIcon} title='like' color='#0074b1'/>
         <FeedOpts Icon={CommentIcon} title='comment' color='#0074b1'/>
         <FeedOpts Icon={ShareIcon} title='share' color='#0074b1'/>
         <FeedOpts Icon={SendIcon} title='send' color='#0074b1'/>
         </div>
         
        </div>
    )
}

export default Post
