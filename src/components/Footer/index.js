import React from "react"

import ImgEp from "../../assets/imgs/ep.png"
import { ContainerFooter, Container, LinkFooter, Img, Border } from "./styles"

import Buttons from "../Button"

function Footer() {
    return (
        <ContainerFooter>
            <Container>
                <Img src={ImgEp} />
                <LinkFooter href="mailto:ewertonprado20@gmail.com" target="_blank"> ewertonprado20@gmail.com</LinkFooter>
            </Container>
            <Border />
            <Buttons />
        </ContainerFooter>

    )
}

export default Footer