import React, { useState ,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login';
import Layout from './layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';






export default function Index(){
  const [loginStatus,setLoginStatus]=useState(false);
  useEffect(()=>{
  setLoginStatus(true);
  },[])
  return(
    <BrowserRouter>
    <Layout loginstatus={loginStatus} />
    <Routes>
     
      <Route path="/" /> 
      <Route index element={<App />}/>
      <Route path="login" element={<Login loginstatus={useEffect}/>}/>
      

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
