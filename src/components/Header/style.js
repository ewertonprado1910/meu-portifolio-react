import styled from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled.div`
background-color: #000;
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 0 auto;
max-width: 1400px;
`
export const Image = styled.img`
width: 250px;
`
export const ContainerLinks = styled.div`
font-size: 20px;
display: flex;
gap: 70px;
margin: 25px 40px 0px 0px;
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
`