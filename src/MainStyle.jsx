import { Global, css } from '@emotion/react';
import React from 'react';


export default function MainStyle() {
  return (
      <Global
        styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital@0;1&family=Varela+Round&display=swap');
          *{
            margin: 0;
            /* font-family: 'Josefin Sans', sans-serif;
            font-family: 'Lora', serif;
            font-family: 'Varela Round', sans-serif; */
          }
          .link {
            text-decoration: none;
            color:inherit;
          }
        `}
      >
      </Global>
  )
}
