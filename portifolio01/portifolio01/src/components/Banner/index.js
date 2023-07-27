import React from 'react';
import { BannerBox, TagH2, Img, TagH1  } from './styles';
const  imageAvatar= require('../img/avatar01.png');





function Banner() {
  return (
    <BannerBox>
        <div>
            <TagH2>Adauto de Matos</TagH2>
            <TagH1>Desenvolvedor full stack</TagH1>
            <p>"Feliz daquele que transfere o que sabe e aprende o que ensina" - Cora Coralina</p>
        </div>
        <div>
            <Img src ={ imageAvatar } alt='Avatar...' align="left" width={250} height={250} />
        </div>
    </BannerBox>
  )
}

export default Banner;