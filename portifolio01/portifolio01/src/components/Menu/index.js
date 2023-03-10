import React from 'react';

import { MenuBox } from './styles';

export default function Menu() {
  return(
        <MenuBox>
             <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/About">About</a></li>
                 <li><a href="/Portifolio">Portfolio</a></li>
                 <li><a href="/Curriculum">Curriculum</a></li>
                 <li><a href="/Contato">Contato</a></li>
            </ul>
        </MenuBox>
  )
}

