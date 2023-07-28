import React from 'react';
import Header from "../../Components/Header/index";
import FotoPessoal from "../../Components/img/fotoPerfil.png";
import { ImgHome, DivMain, H1Sobre, PpEscrita, DivP, H1Tec } from './styled';



export default function Home() {
  return( <div>
          <Header></Header>
     <DivMain>
     <ImgHome src={ FotoPessoal } alt="FotoPerfil"/>
     <DivP>
     <H1Sobre> Sobre mim </H1Sobre>
     <PpEscrita>"Olá! Meu nome é Adauto e é um prazer conhecê-lo(a).
         Sou uma pess     
         oa apaixonada por Programação e tecnologia tenho dedicado 
         minha carreira e tempo para me aprimorar nesse campo. Com uma 
         mentalidade curiosa e uma sede constante por conhecimento, estou
         sempre em busca de desafios que me permitam expandir minhas 
         habilidades e contribuir de forma significativa.</PpEscrita>

      <PpEscrita>Tenho uma formação em Desenvolvedor Full Stack pela Labenu. 
         Alem de ser um otimo vendedor tenho experiencia com 
         empreendedorismo, cozinha e segurança do trabalho.
         Essas experiências me proporcionaram a oportunidade de
         desenvolver competências sólidas em trabalho em grupo 
         resolução de problemas e 
         sempre buscar o meu melhor
         e me tornaram um profissional altamente 
         motivado e focado em alcançar resultados de qualidade.</PpEscrita>

      <PpEscrita>Além disso, sou uma pessoa comunicativa e colaborativa,
         valorizando a importância do trabalho em equipe e a troca 
         de ideias entre os membros. Acredito que a diversidade de 
         perspectivas e a colaboração são fundamentais para impulsionar 
         a inovação e alcançar resultados excepcionais.
         </PpEscrita> 
         <H1Tec>Tecnologia</H1Tec>



      </DivP>
      <div>
      </div>
      
   </DivMain>
</div>
  )
}

 