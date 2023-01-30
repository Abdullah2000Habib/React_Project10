import React from 'react';
import { Label, LoginButton, LoginForm, LoginInput, LoginTitle, LoginWrapper, RegisterButton } from './style';

export default function LoginPage() {
  return (
    <>
        <LoginWrapper>
          <LoginTitle>Login</LoginTitle>
          <LoginForm>
            <Label>Email</Label>
            <LoginInput type="email" placeholder="Enter Your Email ..."></LoginInput>
            <Label>Password</Label>
            <LoginInput type="password" placeholder="Enter Your password ..."></LoginInput>
            <LoginButton>Login</LoginButton>
          </LoginForm>
          <RegisterButton>Register</RegisterButton>
        </LoginWrapper>
    </>
  )
}
