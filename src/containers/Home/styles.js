import styled from "styled-components"
import { Link } from "react-router-dom"


export const BackGround = styled.div`
background-color: #000;
width: 100vw;
height: 100%;
`
export const Section = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 1400px;
margin: 40px auto;

h1 {
    font-size: 25px;
    font-weight: 600;
}
h1 span {
    color: #7c7c7c;
    font-size: 25px;
    font-weight: 600;
}
p {
    font-size: 15px;
}

@media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-size: 15px;
        
    }
    h1 span{
        font-size: 15px;
       
    }
}
`
export const Img = styled.img`
width: 270px;
border-radius: 50px;

@media screen and (max-width: 800px){
    display: none;
}
`
export const ContainerInfo = styled.div`
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
line-height: 1.7;

@media screen and (max-width: 800px) {
    text-align: center;
    margin-top: -25px;
}
`
export const Main = styled.div`
padding: 80px 4%;
box-shadow: 0 0 40px 10px #ffffff23;
margin-top: 70px;

h1 {
    font-size: 25px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
}

@media screen and (max-width: 800px){
    h1 {
        font-size: 15px;
        text-align: center;
    }
}
`
export const ContainerProjects = styled.div`
display: flex;
justify-content: center;
gap: 40px;
flex-wrap: wrap;
max-width: 1400px;  

@media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}
`
export const ProjectWrapper = styled.div`
position: relative;
width: 250px;
height: 370px;
border-radius: 50px;
margin-top: 70px;

@media screen and (max-width: 800px){
    width: 200px;
    height: 280px;
    margin-top: 30px;
}
`
export const LinkProjects = styled(Link)`
display: block;
width: 100%;
height: 100%;
position: relative;
border-radius: 50px;
overflow: hidden;
text-decoration: none;
`
export const ImagesProjects = styled.img`
width: 100%;
height: 100%;
border-radius: 50px;
background-size: cover;
background-position: center;
background-color: #ffffff;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  border-radius: 50px;

  ${LinkProjects}:hover & {
    opacity: 1;
  }
  `