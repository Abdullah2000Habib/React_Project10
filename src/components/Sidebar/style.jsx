import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarWrapper = styled("div")`
label:SidebarWrapper;
flex:3;
margin: 20px;
padding-bottom: 30px;
background-color: #fbfbfb;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const SidebarItem = styled("div")`
label:SidebarItem;
display: flex;
flex-direction: column;
align-items: center;
`
export const SidebarTitle = styled("span")`
label:SidebarTitle;
margin: 10px;
padding: 5px;
width: 80%;
border-top: 1px solid #a7a4a4;
border-bottom:1px solid #a7a4a4;
font-family: 'Varela Round', sans-serif; 
font-size: 12px;
color:#222;
font-weight: 600;
line-height: 20px;
text-align: center;
`
export const SidebarImg = styled("img")`
label:SidebarImg;
margin-top: 15px;
`
export const SidebarP = styled("p")`
label:SidebarP;
padding: 30px;
`
export const SidebarList = styled("ul")`
label:SidebarList;
list-style: none;
margin-bottom: 30px;
`
export const SidebarListItem = styled("li")`
label:SidebarListItem;
display: inline-block;
width: 50%;
margin-top: 15px;
cursor: pointer;
`
export const SidebarSocial = styled("div")`
label:SidebarSocial;
margin-top: 15px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
`

export const SidebarIcon = styled(FontAwesomeIcon)`
label : SidebarIcon ;
font-size: 16px;
margin-right: 10px;
cursor: pointer;

`