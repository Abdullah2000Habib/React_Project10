import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const WriteWrapper = styled("div")`
label:WriteWrapper;
padding-top: 50px;
`
export const WriteImg = styled("img")`
label:WriteImg;
margin-left: 150px;
width: 70vw;
height: 250px;
border-radius: 10px;
object-fit: cover;
`

export const WriteForm = styled("form")`
label:WriteForm;
position: relative;
`

export const WriteFormGroup = styled("div")`
label:WriteFormGroup;
margin-left: 150px;
display: flex;
align-items: center;

`

export const Label = styled("label")`
label:Label;
`

export const WriteIcon = styled(FontAwesomeIcon)`
label:WriteIcon;
width: 25px;
height: 25px;
border-radius: 50%;
border: 1px solid ;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color:rgb(121,118,118);
cursor: pointer;
`
export const Input = styled("input")`
label:Input;
`
export const InputAndTextArea = css`
label:InputAndTextArea;
font-size: 30px;
border:none;
padding: 20px;
width: 70vw;
&:focus{
    outline: none;
}
`
export const WriteInput = styled("input")`
label:WriteInput;
${InputAndTextArea};
`
export const WriteText = styled("textarea")`
label:WriteText;
${InputAndTextArea};
font-size:20px;
height: 100vh;
`
export const WriteSubmit = styled("button")`
label:WriteSubmit;
position: absolute;
top: 20px;
right: 50px;
color: white;
background-color: teal;
padding:10px;
border:none;
border-radius: 10px;
cursor: pointer;
font-size: 16px;

`