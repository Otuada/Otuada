import React from 'react';
import { HeaderBox, Box } from './styles';
import Menu from '../Menu';
import Banner from '../Banner';
import ImageInf from '../img/infinito-736592-removebg-preview.png';

function Header() {
  return( 
    <div>
         <HeaderBox>
             <Box> 
             <div>
                <img src={ ImageInf } alt='logo' width={75} height={50} />
             </div>
             <Menu>
             </Menu>
             </Box>
         </HeaderBox>
  
         <div>        
         <Banner></Banner>  
         </div>
         </div>   
  )
}

export default Header;