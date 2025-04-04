import React from "react"

import { BackGround, Title, Text } from "./styles"
import Header from "../../components/Header"

function AboutMe() {
    return (
        <BackGround>
            <Header showImage={false} />
            <Title>
                Quem sou eu?
            </Title>
            <Text>
                Sou uma pessoa movida pela curiosidade e pela vontade constante de aprender. Ao longo da vida, sempre busquei crescer através dos desafios, e isso me tornou alguém resiliente, focado e prestativo. Tenho 31 anos, sou casado, e atualmente trabalho como motorista de aplicativo, conciliando a rotina com meus estudos e projetos pessoais.

                Minha trajetória na programação começou há 18 meses, e desde então me descobri e me apaixonei pela área. Hoje, sou um desenvolvedor full stack, com forte identificação e entusiasmo pelo desenvolvimento front-end, onde consigo unir técnica, criatividade e experiência do usuário em cada linha de código.

                Antes de ingressar na tecnologia, atuei por muitos anos nos setores comercial e industrial, adquirindo habilidades valiosas como trabalho em equipe, comunicação e resolução de problemas — competências que levo comigo também para o desenvolvimento de software.

                Fora do mundo da programação, sou praticante de musculação, atividade que reforça minha disciplina e constância no dia a dia.

                Estou em busca da minha primeira oportunidade na área de tecnologia, onde pretendo somar, aprender e evoluir junto com o time, sempre com o objetivo de entregar soluções que realmente façam a diferença.
            </Text>
        </BackGround>
    )
}

export default AboutMe