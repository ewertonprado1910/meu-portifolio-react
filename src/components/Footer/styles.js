import styled from "styled-components"


export const ContainerFooter = styled.div `
padding: 20px 4%;
width: 100vw;
max-width: 1400px;
`
export const Container = styled.div `
 display: flex;
 justify-content: space-between;

 @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
`
export const Img = styled.img `
width: 150px;
margin-top: 25px;
`
export const LinkFooter = styled.a `
color: #7c7c7c;
margin-top: auto;
cursor: pointer;

@media screen and (max-width: 800px){
    
}
`
export const Border = styled.div `
border-top: 2px solid #7c7c7c;
margin-top: 10px;
`