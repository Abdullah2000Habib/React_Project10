import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SettingsContainer =styled("div")`
label:SettingsContainer;
display: flex;
`
export const SettingsWrapper =styled("div")`
label:SettingsWrapper;
flex: 9;
padding: 20px;
`
export const SettingsTitle =styled("div")`
label:SettingsTitle;
display: flex;
align-items: center;
justify-content: space-between;
`
export const SettingsUpdateTitle =styled("span")`
label:SettingsUpdateTitle;
font-size: 30px;
margin-bottom: 20px;
color:lightcoral;

`
export const SettingsDeleteTitle =styled("span")`
label:SettingsDeleteTitle;
color: red;
font-size: 12px;
cursor: pointer;
`
export const SettingsForm =styled("form")`
label:SettingsForm;
display: flex;
flex-direction: column;
`
export const Label =styled("label")`
label:Label;
font-size: 20px;
margin-top: 20px;
`
export const SettingsPP =styled("div")`
label:SettingsPP;
display: flex;
align-items: center;
margin: 10px 0;
`
export const SettingsImg =styled("img")`
label:SettingsImg;
width: 70px;
height: 70px;
border-radius: 20px;
object-fit: cover;
`
export const SettingsPPIcon =styled(FontAwesomeIcon)`
label:SettingsPPIcon;
width: 25px;
height: 25px;
border-radius: 50%;
background-color: lightcoral;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-left: 10px;
cursor: pointer;
padding: 7px;
`
export const SettingsInput =styled("input")`
label:SettingsInput;
`
export const Input =styled("input")`
label:Input;
color:gray;
margin: 10px 0;
height: 30px;
border: none;
border-bottom: 1px solid lightgray;
&:focus {
    outline: none;
}
`
export const SettingsSubmit =styled("button")`
label:SettingsSubmit;
width: 150px;
align-self: center;
border:none;
border-radius: 10px;
color:white;
background-color: teal;
padding: 10px;
margin-top: 20px;
cursor: pointer;
`