import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './News/News';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Authentication/login';
import Layout from './layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Authentication/Register';



function Index(){
//export default class Index extends Component{
/*  const [loginStatus,setLoginStatus]=useState({loginStatus:false}); 
 /* function handlelogout(){
  setLoginStatus({loginStatus:false})
  console.log("logouted")
 } */
/*  const
 setLoginStatus(localStorage.getItem('logintatus'))
 console.log(loginStatus) */ 
  const [loginStatus, setLoginStatus] = useState(false);
 //const [username,setUsername]=useState('')
 var username; 

 function handlelogout() {
  setLoginStatus(false);
  console.log("logged out");
}  

function handlesearch(searchvalue){console.log(searchvalue)}
//const handleusername=(name)=>{setUsername}
console.log("username:" +username)   
const login=()=>{console.log("loginstatus"+loginStatus)
  setLoginStatus(true);console.log("login")} 
  return(
    <BrowserRouter>
    <Layout  loginstatus={loginStatus} // <-- boolean true/false
  logout={handlelogout}/*  search={(searchvalue)=>handlesearch({searchvalue})} */ />
    <Routes>
     
      {/* <Route path="/" />  */}
   
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<App />} />
      <Route path="/login" element={<Login   login={login } handleusername={(name)=>{username=name;console.log("username: "+username)}} />}/>
      <Route path="/register" element={<Register />}/>

    </Routes>
    </BrowserRouter>
  )
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
