import React from 'react';
import { PostCat, PostCats, PostDate, PostDesc, PostImg, PostInfo, PostTitle, PostWrapper } from './style';

export default function Post({img}) {
return (
    <>
        <PostWrapper>
            <PostImg src={img}></PostImg>
            <PostInfo>
                <PostCats>
                    <PostCat>Music</PostCat>
                    <PostCat>Life</PostCat>
                </PostCats>
                <PostTitle>Laboris sunt aute cupidatat velit</PostTitle>
                <hr/>
                <PostDate>1 hour ago</PostDate>
                <PostDesc>Laboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velitLaboris sunt aute cupidatat velit</PostDesc>
            </PostInfo>
        </PostWrapper>
    </>
)
}
