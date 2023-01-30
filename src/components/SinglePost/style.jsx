import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SinglePostContainer =styled("div")`
label:SinglePostContainer;
flex: 9;
`
export const SinglePostWrapper =styled("div")`
label:SinglePostWrapper;
padding: 20px;
padding-right: 0;
`
export const SinglePostImg =styled("img")`
label:SinglePostImg;
width: 100%;
height: 300px;
border-radius: 5px;
object-fit: cover;
`
export const SinglePostTitle =styled("h1")`
label:SinglePostTitle;
text-align: center;
margin:10px;
font-family: 'Lora', serif;
font-size: 28px;
`
export const SinglePostEdit =styled("div")`
label:SinglePostEdit;
float: right;
font-size: 16px;
`
export const SinglePostIcon =styled(FontAwesomeIcon)`
label:SinglePostIcon;
margin-left: 10px;
cursor: pointer;
&:first-child {
    color: teal;
}
&:last-child {
    color: tomato;
}
`
export const SinglePostInfo =styled("div")`
label:SinglePostInfo;
margin-bottom: 20px;
display: flex;
justify-content: space-between;
font-size: 16px;
color:#b39656;
font-family: 'Varela Round', sans-serif;
`
export const SinglePostAuthor =styled("span")`
label:SinglePostAuthor;

`
export const B =styled("b")`
label:B;
`
export const SinglePostDate =styled("span")`
label:SinglePostDate;
`
export const SinglePostDesc =styled("p")`
label:SinglePostDesc;
color: #666;
font-size: 18px;
line-height: 25px;
&:first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
}
`