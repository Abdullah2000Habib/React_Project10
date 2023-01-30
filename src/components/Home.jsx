import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import SinglePage from '../pages/SinglePage/SinglePage';
import WritePage from '../pages/WritePage/WritePage';
import Topbar from './Topbar/Topbar';

export default function Home() {
  const [user,setUser] =useState(false);
  return (
    <>
        <Topbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/register'   element={user?<HomePage />:<RegisterPage />}/>
          <Route path='/login' element={user?<HomePage />:<LoginPage/>}/>
          <Route path='/write' element={user?<WritePage/>:<RegisterPage />}/>
          <Route path='/settings' element={user?<SettingsPage/>:<RegisterPage />}/>
          <Route path='/post/:postId' element={<SinglePage/>}/>




          <Route path='/home' element={<HomePage />}/>
          <Route path='/about' element={<HomePage />}/>
          <Route path='/contact' element={<HomePage />}/>
          <Route path='/logout' element={<LoginPage/>}/>
        </Routes>
        {/*  */}
        {/* <SingelPage/> */}
        {/* <WritePage/> */}
        {/* <SettingsPage/> */}
        {/* <LoginPage/> */}
        {/* <RegisterPage/> */}
    </>
  )
}
