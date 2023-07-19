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
     <p>"Olá! Meu nome é Adauto e é um prazer conhecê-lo(a).
         Sou uma pessoa apaixonada por Programação e tecnologia tenho dedicado 
         minha carreira e tempo para me aprimorar nesse campo. Com uma 
         mentalidade curiosa e uma sede constante por conhecimento, estou
         sempre em busca de desafios que me permitam expandir minhas 
         habilidades e contribuir de forma significativa.</p>

      <p>Tenho uma formação em Desenvolvedor Full Stack pela Labenu. 
         Alem de ser um otimo vendedor tenho experiencia com 
         empreendedorismo, cozinha e segurança do trabalho.
         Essas experiências me proporcionaram a oportunidade de
         desenvolver competências sólidas em trabalho em grupo 
         resolução de problemas e 
         sempre buscar o meu melhor
         e me tornaram um profissional altamente 
         motivado e focado em alcançar resultados de qualidade.</p>

      <p>Além disso, sou uma pessoa comunicativa e colaborativa,
         valorizando a importância do trabalho em equipe e a troca 
         de ideias entre os membros. Acredito que a diversidade de 
         perspectivas e a colaboração são fundamentais para impulsionar 
         a inovação e alcançar resultados excepcionais.</p>

      <p>No meu tempo livre, gosto de musica skate dança e principalmente curtir 
         com meu filho.
         Acredito que o equilíbrio entre o trabalho e o lazer é essencial 
         para manter uma mente saudável e criativa.</p>

       <p>Estou animado para enfrentar novos desafios e contribuir para 
         seu time. Estou aberto a oportunidades 
         de tecnoligia que me permitam crescer profissionalmente e
         fazer a diferença no mundo. Se você está em busca de um profissional 
         dedicado, comprometido e apaixonado por programação, adoraria 
         conversar e explorar possíveis colaborações.</p>

        <p>Obrigado por dedicar seu tempo para conhecer um pouco mais
           sobre mim. Estou ansioso para conectarmos e discutirmos como 
           posso contribuir para o sucesso do seu projeto ou organização!"</p>  
           


     </DivMain>
</div>
  )
}

 