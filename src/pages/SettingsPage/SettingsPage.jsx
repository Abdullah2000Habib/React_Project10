import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Input, Label, SettingsContainer, SettingsDeleteTitle, SettingsForm, SettingsImg, SettingsInput, SettingsPP, SettingsPPIcon, SettingsSubmit, SettingsTitle, SettingsUpdateTitle, SettingsWrapper } from './style';
export default function SettingsPage() {
return (
    <>
        <SettingsContainer>
            <SettingsWrapper>
                <SettingsTitle>
                    <SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
                    <SettingsDeleteTitle>Delete Account</SettingsDeleteTitle>
                </SettingsTitle>
                <SettingsForm>
                    <Label>Profile Picture</Label>
                    <SettingsPP>
                        <SettingsImg src= "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
                        <Label htmlFor='fileInput'>
                            <SettingsPPIcon icon={faUserCircle}></SettingsPPIcon>
                        </Label>
                        <SettingsInput type="file" id="fileInput" style={{display: "none"}}/>
                    </SettingsPP>
                    <Label>Username</Label>
                    <Input type="text" placeholder='Safak'/>
                    <Label>Email</Label>
                    <Input type="email" placeholder='Safak@gmail.com'/>
                    <Label>Password</Label>
                    <Input type="password" placeholder='Password'/>
                    <SettingsSubmit>Update</SettingsSubmit>
                </SettingsForm>
            </SettingsWrapper>
            <Sidebar/>
        </SettingsContainer>
    </>
)
}
