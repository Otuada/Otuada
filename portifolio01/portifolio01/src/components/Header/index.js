import React from 'react';
import { HeaderBox, LogoBox, LogoImg } from './styles';
import Menu from '../Menu';
import Banner from '../Banner';
import ImageInf from '../img/infinito-736592-removebg-preview.png';

function Header() {
  return( 
    <div>
         <HeaderBox>
             <LogoBox> 
              <div>
                <LogoImg src={ ImageInf } alt='logo' width={75} height={50} />
              </div>
             <Menu>
             </Menu>
             </LogoBox>
         </HeaderBox>
  
         <div>        
         <Banner></Banner>  
         </div>
         </div>   
  )
}

export default Header;