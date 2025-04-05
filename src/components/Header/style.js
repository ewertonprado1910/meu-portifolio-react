import styled from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled.div`
background-color: #000;
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 0 auto;
max-width: 1400px;

@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
`
export const Image = styled.img`
width: 250px;

@media screen and (max-width: 800px){
    width: 140px;
    
}
`
export const ContainerLinks = styled.div`
font-size: 20px;
display: flex;
gap: 70px;
margin: 25px 40px 0px 0px;

@media screen and (max-width: 800px) {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 13px;
   margin: 25px auto 0;
   
}
`
export const StyleLink = styled(Link)`
font-size: 17px;
font-weight: 500;
color: #7c7c7c;
margin: 25px 40px 0px 0px;
cursor: pointer;
text-decoration: none;

&:hover {
    font-size: 20px;
    color: #ffffff;
    transform: scale(1.07);
    transition: .2s;
}
${({ active }) =>
        active &&
        `
        border-bottom: 2px solid #7c7c7c; 
    `}

@media screen and (max-width: 800px) {
    font-size: 10px;
    margin: auto;
    
    &:hover {
      font-size: 10px;
      transform: none;
      color: #ffffff;
    }
  }
`
export const Button = styled.button`
font-size: 17px;
font-weight: 500;
padding: 5px 30px;
font-size: 18px;
font-weight: 500;
cursor: pointer;
border: 1px solid;
border-radius: 20px;
box-shadow: 0px 0px 8px #ddd6d600;

&:hover {
    transform: scale(1.07);
    transition: .2s;
}

@media screen and (max-width: 800px) {
    display: none;
}
`