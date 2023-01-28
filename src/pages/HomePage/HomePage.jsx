import React from 'react';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/Sidebar';
import { HomeWrapper } from './style';

export default function HomePage() {
return (
    <>
        <Header/>
        <HomeWrapper>
            <Posts/>
            <Sidebar/>
        </HomeWrapper>

    </>
)
}
