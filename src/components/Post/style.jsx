import styled from "@emotion/styled";

export const PostWrapper =styled("div")`
label :PostWrapper;
width: 385px;
margin: 0px 25px 40px 25px;
`
export const PostImg =styled("img")`
label :PostImg;
width: 100%;
height: 280px;
object-fit: cover;
border-radius: 7px;
`
export const PostInfo =styled("div")`
label :PostInfo;
display: flex;
flex-direction: column;
align-items: center;
`
export const PostCats =styled("div")`
label :PostCats;

`
export const PostCat =styled("span")`
label :PostCat;
font-family: 'Varela Round', sans-serif;
font-size: 12px;
color:#be9656;
line-height: 20px;
margin-top: 15px;
margin-right: 10px;
cursor: pointer;
`
export const PostTitle =styled("span")`
label :PostTitle;
font-family: 'Josefin Sans', sans-serif;
font-size: 24px;
font-weight: 700;
margin-top: 15px;
cursor: pointer;
`
export const PostDate =styled("span")`
label :PostDate;
font-family: 'Lora', serif;
font-style:italic;
font-size: 13px;
color:#999;
margin-top: 15px;
`
export const PostDesc =styled("p")`
label :PostDesc;
font-family: 'Varela Round', sans-serif;
font-size: 14px;
color:#444;
line-height: 24px;
margin-top: 15px;
overflow: hidden;
text-overflow: ellipsis;
 display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`