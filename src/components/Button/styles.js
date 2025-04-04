import styled from "styled-components"

export const ButtonContainer = styled.div `
display: flex;
gap: 15px;
`
export const ButtonIcon = styled.button `
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
border: none;
border-radius: 50%;
font-size: 20px;
background-color: #7c7c7c;
margin: 10px 0px;
transition: .2s;
cursor: pointer;

  &:hover {
    transform: scale(1.07);
    transition: .2s;;
  }


`