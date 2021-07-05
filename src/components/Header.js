import React,{useState} from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOpts from './HeaderOpts';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {auth,db} from '../firebase'
import {AddingNewUser} from '../reduxStore/user/userActions'
function Header() {
    const history = useHistory();
  const [url,seturl] = useState('')
    const dispatch=useDispatch()
    const signout=(e)=>{
        e.preventDefault()
        dispatch(AddingNewUser({name:'',email:'',url_image:''}))
        auth.signOut()
        history.push('/')
    }
    const name=useSelector((state)=>state.name)
    const email=useSelector((state)=>state.email)
    const url_image=useSelector((state)=>state.url_image)

    const submit_image=(e)=>{
        e.preventDefault()
        if(email===''){
            history.push('/')
        }else{
          
        db.collection('users').where('email','==',email).get().then((snap)=>{
            snap.forEach(doc=>{
                db.collection('users').doc(doc.id).update({
                    urlPhoto:url
                })
                dispatch(AddingNewUser({name:doc.data().name,email:doc.data().email,url_image:doc.data().urlPhoto}))
            })
        })
        
        }
       
               
            
    }


    return (
        <div className='header'>

            
            <div className='header_left'>

            <img src='linkedIn_PNG38.png' alt=''/>
            
            <div className='header_search'>

            <SearchIcon/>
                <input type='text'/>

            </div>

            </div>

            <div className='header_right'>
                <HeaderOpts Icon={HomeIcon} title='Home'/>
                <HeaderOpts Icon={PeopleIcon} title='My Network'/>
                <HeaderOpts Icon={WorkIcon} title='Jobs'/>
                <HeaderOpts Icon={MessageIcon} title='Messages'/>
                <HeaderOpts Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOpts imgsrc={url_image} title={name}/>
                <span onClick={signout}>Sign out</span>
             
            </div>
            <form className='imageForm'>
                <h4>Enter url pic for your profile </h4>
                 <input onChange={(e)=>seturl(e.target.value)} type='text' ></input>
                 <button onClick={submit_image}>Submit</button>
            </form>
             
        </div>
    )
}

export default Header
