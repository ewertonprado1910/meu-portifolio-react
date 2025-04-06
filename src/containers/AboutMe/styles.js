import styled from "styled-components"

export const BackGround = styled.div `
background-color: #000;
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const Title = styled.h1 `
font-size: 30px;
color: #fff;
text-align: center;
margin: 50px 0;

@media screen and  (max-width: 800px){
    font-size: 18px;
    margin-top: 30px;
}
`
export const Text = styled.p `
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
    margin-top: -10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`