import React from "react"
import { useLocation } from "react-router-dom"

import { Container, Image, ContainerLinks, StyleLink, Button } from "./style"

import FileImages from "../../assets/images"

function Header({ showImage = true }) {
    const location = useLocation()

    return (
        <Container >
            {showImage && <Image src={FileImages.ewerton} />}
            <ContainerLinks >
                <StyleLink to="/" active={location.pathname === "/"}>Home</StyleLink>
                <StyleLink to="/languages" active={location.pathname === "/languages"}>Linguagens e Tecnologias</StyleLink>
                <StyleLink to="/sobre" active={location.pathname === "/sobre"}>Sobre</StyleLink>
                <StyleLink to="https://www.linkedin.com/in/ewerton-prado-desenvolvedor-front-end/details/projects/" target="blank" >Projetos</StyleLink>
                <StyleLink to="https://wa.me/5511999341743" target="_blank"><Button>Contato</Button></StyleLink>
            </ContainerLinks>
        </Container>

    )
}

export default Header