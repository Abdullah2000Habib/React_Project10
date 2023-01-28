import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import img from "../../assets/01.jpg";
import { SidebarIcon, SidebarImg, SidebarItem, SidebarList, SidebarListItem, SidebarP, SidebarSocial, SidebarTitle, SidebarWrapper } from './style';
export default function Sidebar() {
  return (
    <>
        <SidebarWrapper>
          <SidebarItem>
            <SidebarTitle>ABOUT ME</SidebarTitle>
            <SidebarImg
              src={img}
              alt="">
            </SidebarImg>
            <SidebarP>
              Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
              amet ex esse.Sunt eu ut nostrud id quis proident.
            </SidebarP>
          </SidebarItem>
          <SidebarItem>
            <SidebarTitle>CATEGORIES</SidebarTitle>
            <SidebarList>
              <SidebarListItem>Life</SidebarListItem>
              <SidebarListItem>Music</SidebarListItem>
              <SidebarListItem>Style</SidebarListItem>
              <SidebarListItem>Sport</SidebarListItem>
              <SidebarListItem>Tech</SidebarListItem>
              <SidebarListItem>Cinema</SidebarListItem>
            </SidebarList>
          </SidebarItem>
          <SidebarItem>
            <SidebarTitle>FOLLOW US</SidebarTitle>
            <SidebarSocial>
            <SidebarIcon icon={faInstagramSquare}></SidebarIcon>
            <SidebarIcon icon={faFacebookSquare}></SidebarIcon>
            <SidebarIcon icon={faTwitterSquare}></SidebarIcon>
            <SidebarIcon icon={faPinterestSquare}></SidebarIcon>
            </SidebarSocial>
          </SidebarItem>
        </SidebarWrapper>
    </>
  )
}
