import styled from "styled-components";

export const BannerBox = styled.header`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(green, #1F1D1D);
    
`


export const TagH2 =styled.h2`
    color: white;
    font-size: 3em;
    cursor: pointer;
                transition-duration: 1s;
                &:hover{
                    color: #DEED41;
                    transition-duration: 1s;
                }
                transition: transform 0.3s ease-in-out; 
                &:hover
                       {transform: scale(1.2); 
                }

`

export const Img =styled.img`
    transition: transform 0.3s ease-in-out; /* efeito de transição suave */
    &:hover
    {transform: scale(1.2); /* aumentar em 20% */
}
margin-left: 200px;
`