import React,{useState,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import '../styles/Feed.css'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import FeedOpts from './FeedOpts';
import Post from './Post';
import {db} from '../firebase'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
function Feed() {
    const [posts,setposts]=useState([])
    const [msg,setmsg]=useState('')
    const [photourl_change_Var,setphotourl_change_Var]=useState('')

  const  photourl_change=(e)=>{
      e.preventDefault()
     setphotourl_change_Var(e.target.value)
  }
    const name=useSelector((state)=>state.name)
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{

            setposts(snapshot.docs.map(doc=>{
                return{
                    id:doc.id,
                    data:doc.data()
                }
            }))
        })

    },[])
    const submit=(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            name:name,
            discription:'its test',
            message:msg,
            photourl:photourl_change_Var,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setmsg('')
    }
    return (
       
        <div className='feed'>
            <div className='input_container'>
            <div className='input'>
            <CreateIcon/>
            <form className='form'>
                <input onChange={(e)=>setmsg(e.target.value)} type='text'/>
                <button onClick={submit} type='submit'>Send</button>
            </form>
            </div>
            <div className='options'>
            <div  className='feed_opts_photo'>
            <div className='photo__info'>
            <PhotoIcon className='photo__icon' style={{color:'lightblue'}}/>
            <h4 className='photo__title'>photo</h4>
            </div>
            <input onChange={photourl_change} className='hidden_input' placeholder='enter url pic' type='text'/>
            </div>
            <FeedOpts Icon={VideoLibraryIcon} color='orangered' title='video'/>
            <FeedOpts Icon={EventIcon} color='gray' title='events'/>
            <FeedOpts Icon={DescriptionIcon} color='lightgreen' title='write article'/>
            </div>
         
         
            </div>
               {/* posts */}
               {/* get the name of the current user ---> find docs with the same name in posts --->render it */}
          <div className='posts'>
     {posts.map(({id,data})=>{
      if(data.name===name){
            return(
              <Post key={id} name={data.name} discription={data.discription} message={data.message} photourl={data.photourl}/>
            ) 
        }
         
           })}
          </div>
          
        </div>
    )
}

export default Feed
