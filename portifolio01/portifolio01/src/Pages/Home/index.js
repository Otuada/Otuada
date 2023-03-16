import React from 'react';
import Header from "../../Components/Header/index";
import FotoPessoal from "../../Components/img/fotoPerfil.png";
import { ImgHome } from './styled';



export default function Home() {
     
  return( <div>
          <Header></Header>
     <div>
     <ImgHome src={ FotoPessoal } alt="FotoPerfil"/>
     <h1> Sobre mim </h1>
     <p> aiiaiaiaiaiaiaiaiaiaiai dsffewr </p>


     </div>
</div>
  )
}

 