import React from 'react';
import { HeaderImg, HeaderTitleLg, HeaderTitleSm, HeaderTitles, HeaderWrapper } from './style';

export default function Header() {
  return (
    <>
        <HeaderWrapper>
          <HeaderTitles>
            <HeaderTitleSm>React & Node</HeaderTitleSm>
            <HeaderTitleLg>Blog</HeaderTitleLg>
          </HeaderTitles>
         <HeaderImg src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""/> 
        </HeaderWrapper>
    </>
  )
}
