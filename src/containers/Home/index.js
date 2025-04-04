import React from "react"

import { BackGround, 
    Section, 
    Img, 
    ContainerInfo, 
    Main, 
    ContainerProjects, 
    ProjectWrapper,
    LinkProjects,
    ImagesProjects,
    Overlay
 } from "./styles"

import ImagePerson from "../../assets/imgs/foto.jpeg"
import ImgConversor from "../../img/img-projects/conversor.png"
import ImgDevMovies from "../../img/img-projects/dev-movies.jpg"
import ImgList from "../../img/img-projects/lista.jpg"
import ImgMario from "../../img/img-projects/mario.jpg"
import ImgLookApp from "../../img/img-projects/lookapp.jpg"
import ImgCodeBurguer from "../../img/img-projects/codeBurguer.png"
import ImgDevBills from "../../img/img-projects/devbills.jpg"


import Header from "../../components/Header"
import Buttons from "../../components/Button"
import Footer from "../../components/Footer"


function Home() {

    return (
        <BackGround>
            <Header />
            <Section>
                <ContainerInfo>
                    <h1>Olá, seja bem vindo, meu nome é <span>Ewerton Pedroso do Prado.</span></h1>
                    <p>Sou um desenvolvedor Front-End comprometido e organizado, com forte capacidade de resolução de problemas e adaptação a novas tecnologias. Busco constantemente aprimorar minhas habilidades para me tornar um profissional altamente qualificado e uma referência no mercado. Meu objetivo é atuar em projetos desafiadores, agregando valor às empresas por meio da tecnologia e da inovação.</p>
                    <Buttons />
                </ContainerInfo>
                <Img src={ImagePerson} />
            </Section>

            <Main>
                <h1>Meus Principais Projetos</h1>
                <ContainerProjects>
                    <ProjectWrapper >
                        <LinkProjects to="https://conversordevalores.netlify.app/" target="_blank">
                          <ImagesProjects src={ImgConversor}/>
                          <Overlay>Conversor de Moedas</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://devmoviesnet.netlify.app/" target="_blank">
                          <ImagesProjects src={ImgDevMovies}/>
                          <Overlay>Dev Movies</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://terefas.netlify.app/" target="_blank">
                          <ImagesProjects src={ImgList}/>
                          <Overlay>Lista de Tarefas</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://irmaosmariofaztudo.netlify.app/" target="_blank">
                          <ImagesProjects src={ImgMario}/>
                          <Overlay>Mario Encanador</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://github.com/ewertonprado1910/LookApp/blob/main/README.md" target="_blank">
                          <ImagesProjects src={ImgLookApp}/>
                          <Overlay>Look App</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://github.com/ewertonprado1910/front-end-code-burguer" target="_blank">
                          <ImagesProjects src={ImgCodeBurguer}/>
                          <Overlay>Code Burguer</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                    <ProjectWrapper >
                        <LinkProjects to="https://github.com/ewertonprado1910/front-devbills/blob/main/README.md" target="_blank">
                          <ImagesProjects src={ImgDevBills}/>
                          <Overlay>Dev Bills</Overlay>
                        </LinkProjects>
                    </ProjectWrapper>
                </ContainerProjects>
            </Main>
            <Footer/>


        </BackGround>



    )
}

export default Home