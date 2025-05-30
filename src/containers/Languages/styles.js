import styled from "styled-components"


export const BackGround = styled.div `
background-color: #000;
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
export const Tecnologies = styled.div `
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
margin-top: 100px;
`
export const Images = styled.img `
width: 50px;

@media screen and (max-width: 800px){
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    
}
`
export const Text = styled.h1 `
color: #fff;
text-align: center;
display: flex;
align-items: end;
margin: 50px 0;
font-size: 20px;
font-weight: 500;
max-width: 1400px;

@media screen and (max-width: 800px) {
    font-size: 16px;
    padding: 0 17px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`