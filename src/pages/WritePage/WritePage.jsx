import { faAdd } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Input, Label, WriteForm, WriteFormGroup, WriteIcon, WriteImg, WriteInput, WriteSubmit, WriteText, WriteWrapper } from './style';

export default function WritePage() {
return (
    <>
        <WriteWrapper>
            <WriteImg src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
            <WriteForm>
                <WriteFormGroup>
                    <Label htmlFor ="fileInput">
                        <WriteIcon icon={faAdd}></WriteIcon>
                    </Label>
                    <Input type="file" id="fileInput" style={{display: "none"}}/>
                    <WriteInput type="text" placeholder="Title" autoFocus ={true}/>
                </WriteFormGroup>
                <WriteFormGroup>
                    <WriteText placeholder="Tell your Story ..." type="text"></WriteText>
                </WriteFormGroup>
                <WriteSubmit>Publish</WriteSubmit>
            </WriteForm>
        </WriteWrapper>
    </>
)
}
