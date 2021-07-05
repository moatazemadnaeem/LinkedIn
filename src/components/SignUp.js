import React,{useState} from 'react'
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import {auth,db} from '../firebase'
import {AddingNewUser} from '../reduxStore/user/userActions'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
function Login() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    const submit=(e)=>{
        e.preventDefault() 
        auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
            db.collection('users').doc(cred.user.uid).set({
                name:name,
                email:email,
                urlPhoto:''
            }).then((res)=>{
                console.log(res)
            })
            console.log(cred)
            dispatch(AddingNewUser({name:name,email:email,url_image:''}))
            history.push('/app')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='login'>
            
          <div className='login_container'>
              <Link to='/app'>
              <img className='login_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png' alt=''/>
              </Link>
            
            <form className='login_form'>
               
                <input type='text' onChange={(e)=>setname(e.target.value)} placeholder='enter your name'/>
              
                <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='enter your email'/>
              
                <input type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password'/>
                <button onClick={submit}>Sign up</button>
                <Link className='login_form_span' to='/signin'> 
                <span>Or sign In</span>
                </Link>
               
            </form>
          </div>
          <div className='image_container'>

          </div>
        </div>
    )
}

export default Login
