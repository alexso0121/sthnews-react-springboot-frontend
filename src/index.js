import React, { Component, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './News/News';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Authentication/login';
import Layout from './layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Authentication/Register';
import Info from './Personal/info';
import Updateuser from './Personal/updateuser';
import Article from './News/Article';
import History from './Personal/History';
import Stored from './Personal/Stored';
import Buttom from './layout/buttom';
import Try from './News/try'
import Weather from './Weathering/weather'
import { AuthProvider, Usercontext } from './Usercontext';
import {CatStateContext} from "./CatStateContext"


//main configuration for regulating each website page in the frontend
function Index(){

 
  const [userStatus, setUserStatus] = useState();

 var username; 

 //

  return(
    <BrowserRouter>
    


    <Layout  userStatus={userStatus}
  />

 {/*  making a global variable (url for the backend) for applying to all pages */}
  <CatStateContext.Provider value="https://sthbackend.com/">
     <Routes>
     
     
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<App />} />
      
      <Route path="/login" element={<Login    />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/info" element={<Info  />}/>
      <Route path="/updateuser" element={<Updateuser  />}/>
      <Route path="/article/:id/get" element={<Article  />}/>
      <Route path="/history/get" element={<History  />}/>
      <Route path="/stored/get" element={<Stored  />}/>
      <Route path="/try" element={<Try  />}/>
      <Route path="/weather" element={<Weather />}/>
      
      
      
      </Routes>
      </CatStateContext.Provider>
    <Buttom />
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
