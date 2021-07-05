import React,{useState} from 'react'
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import {auth, db} from '../firebase'
import {AddingNewUser} from '../reduxStore/user/userActions'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
function SignIn() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    const submit=(e)=>{
        e.preventDefault() 
        db.collection('users').where('email','==',email).get().then(user=>{
         user.forEach(doc=>{
            auth.signInWithEmailAndPassword(doc.data().email,password).then((user)=>{
                dispatch(AddingNewUser({name:doc.data().name,email:doc.data().email,url_image:doc.data().urlPhoto}))
                history.push('/app')
            })
         })
        })
        
    }
    return (
        <div className='login'>
            
          <div className='login_container'>
              <Link to='/app'>
              <img className='login_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png' alt=''/>
              </Link>
            
            <form className='login_form'>
               
                <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='enter your email'/>
              
                <input type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password'/>
                <button onClick={submit}>Sign In</button>
                <Link className='login_form_span' to='/'> 
                <span>Or sign up</span>
                </Link>
               
            </form>
          </div>
          <div className='image_container'>

          </div>
        </div>
    )
}

export default SignIn
