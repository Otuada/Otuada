import React from 'react';
import Header from "../../Components/Header/index";
import FotoPessoal from "../../Components/img/fotoPerfil.png";
import { ImgHome, DivMain, H1Sobre } from './styled';



export default function Home() {
     
  return( <div>
          <Header></Header>
     <DivMain>
     <ImgHome src={ FotoPessoal } alt="FotoPerfil"/>
     <H1Sobre> Sobre mim </H1Sobre>
     <p>  </p>


     </DivMain>
</div>
  )
}

 