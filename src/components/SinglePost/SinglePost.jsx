import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { B, SinglePostAuthor, SinglePostContainer, SinglePostDate, SinglePostDesc, SinglePostEdit, SinglePostIcon, SinglePostImg, SinglePostInfo, SinglePostTitle, SinglePostWrapper } from './style';
export default function SinglePost() {
  return (
    <>
        <SinglePostContainer>
          <SinglePostWrapper>
            <SinglePostImg src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
            <SinglePostTitle>
              Lorem ipsum dolor
              <SinglePostEdit>
                <SinglePostIcon icon={faEdit}></SinglePostIcon>
                <SinglePostIcon icon={faTrashAlt}></SinglePostIcon>
              </SinglePostEdit>
            </SinglePostTitle>
            <SinglePostInfo>
              <SinglePostAuthor>Author : <B>Safak</B></SinglePostAuthor>
              <SinglePostDate>1 hour ago</SinglePostDate>
            </SinglePostInfo>
            <SinglePostDesc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
              quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
              Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
              eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
              iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
              a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
              iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
              a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
              iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
              a odit modi eos!
            </SinglePostDesc>
          </SinglePostWrapper>
        </SinglePostContainer>
    </>
  )
}
