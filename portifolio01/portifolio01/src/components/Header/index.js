import React from 'react';
import { HeaderBox, Box } from './styles';
import Menu from '../Menu';

function Header() {
  return( 
         <HeaderBox>
             <Box> 
             <div>
                logo
             </div>
             <Menu>
                
             </Menu>
             </Box>
         </HeaderBox>  
  )
}

export default Header;