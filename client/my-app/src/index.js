import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './html/Navbar';
import App from './App';
import {BrowserRouter, createBrowserRouter,NavLink,Route,RouterProvider,Routes} from "react-router-dom";
import FindInfluencer from './html/FindInfluencer';
import Box_1 from './html/Box_1';
import Footer from './html/Footer';
// import Navbar from './html/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Box_1/>
  <Routes>
    {/* <Route path='/' element={<Home/>}></Route> */}
    <Route path='/findinfluencer' element={<FindInfluencer/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
);
