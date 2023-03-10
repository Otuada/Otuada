import styled from "styled-components";


export const MenuBox =styled.nav`
   
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    
    

    li{
        margin-left: 10px;
        margin-right: 10px;
        transition: transform 0.3s ease-in-out; 
                &:hover
                {transform: scale(1.2); 
                }
        a{
            text-decoration: none;
            color: #9DA79A;
            font-size: 1.3rem;
            
                cursor: pointer;
                transition-duration: 1s;
                &:hover{
                    color: #FFFFFF;
                    transition-duration: 1s;
                }
                transition: transform 0.3s ease-in-out; /* efeito de transição suave */
                &:hover
                {transform: scale(1.2); /* aumentar em 20% */
                }
        }
    }
}
`