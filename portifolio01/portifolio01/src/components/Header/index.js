import React from 'react';
import { HeaderBox, Box } from './styles';
import Menu from '../Menu';
import Banner from '../Banner';

function Header() {
  return( 
    <div>
         <HeaderBox>
             <Box> 
             <div>
                logo
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