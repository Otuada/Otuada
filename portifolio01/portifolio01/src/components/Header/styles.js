import styled from "styled-components";

export const HeaderBox =styled.header`
     height: 90px;
     background-color: #1F1D1D;
`;

export const LogoBox =styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoImg =styled.img`
    transition: transform 0.3s ease-in-out; 
    &:hover
    {transform: scale(1.2); 
}
`
