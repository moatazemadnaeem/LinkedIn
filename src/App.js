import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { useHistory } from "react-router-dom";
import {auth,db} from './firebase'
import {useDispatch} from 'react-redux'
import {AddingNewUser} from './reduxStore/user/userActions'
function App() {
  const history = useHistory();
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log('user is',user.email)
      if(user){
        db.collection('users').where('email','==',user.email).get().then(user=>{
          user.forEach(doc=>{
             dispatch(AddingNewUser({name:doc.data().name,email:doc.data().email,url_image:doc.data().urlPhoto}))
           
          })
         })
         
      }
      
  })
  },[])
  return (
    <Router>
       <div className="app">
         <Switch>
          <Route exact path='/'>
            <SignUp/>
          </Route>
          <Route exact path='/signin'>
            <SignIn/>
          </Route>
          <Route exact path='/app'>
            <Header/>
        <div className='bodyContainer'>
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
          </Route>
         </Switch>
         {/* 
         File to grap a photo url

         push firebase user url using find to find user by email and then update the record to add url photo

         dispatch url to the store so we can grap it and put it whatever we want
         */}
    </div>
    </Router>

  );
}

export default App;


