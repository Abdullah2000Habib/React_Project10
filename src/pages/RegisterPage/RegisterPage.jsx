import React from 'react';

import { Link } from 'react-router-dom';
import { Label, LoginButton, RegisterButton, RegisterForm, RegisterInput, RegisterTitle, RegisterWrapper } from './style';

export default function RegisterPage() {
  return (
    <>
        <RegisterWrapper>
          <RegisterTitle>Register</RegisterTitle>
          <RegisterForm>
            <Label>Username</Label>
            <RegisterInput type="username" placeholder="Enter Your Username ..."></RegisterInput>
            <Label>Email</Label>
            <RegisterInput type="email" placeholder="Enter Your Email ..."></RegisterInput>
            <Label>Password</Label>
            <RegisterInput type="password" placeholder="Enter Your password ..."></RegisterInput>
            <RegisterButton>Register</RegisterButton>
          </RegisterForm>
          <LoginButton>
            <Link className='link' to="/login">Login</Link>
          </LoginButton>
        </RegisterWrapper>
    </>
  )
}
