import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost';
import { SinglePageWrapper } from './style.jsx';

export default function SinglePage() {
return (
    <>
        <SinglePageWrapper>
            <SinglePost/>
            <Sidebar/>
        </SinglePageWrapper>
    </>
)
}
