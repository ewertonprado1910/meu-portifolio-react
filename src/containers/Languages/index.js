import React from "react"

import Header from "../../components/Header"

import { BackGround, Text, Tecnologies, Images } from "./styles"
import FileImages from "../../assets/images"


function Languages() {
    return (
        <BackGround>
            <Header showImage={false} />
            <Tecnologies>
                <Images src={FileImages.html} />
                <Images src={FileImages.css} />
                <Images src={FileImages.js} />
                <Images src={FileImages.react} />
                <Images src={FileImages.typescript} />
                <Images src={FileImages.node} />
                <Images src={FileImages.docker} />
            </Tecnologies>
            <Text>
                Minha principal linguagem de programação é JavaScript, uma escolha que reflete minha afinidade com o desenvolvimento web e mobile. Ao longo da minha trajetória, desenvolvi projetos que abrangem desde aplicações front-end interativas até APIs escaláveis no back-end, sempre aplicando boas práticas de desenvolvimento.

                No desenvolvimento front-end, utilizei HTML5 e CSS para estruturar e estilizar interfaces responsivas e intuitivas. Com React.js, desenvolvi aplicações modernas e dinâmicas, adotando conceitos como componentização, gerenciamento de estado e otimização de performance.

                No back-end, utilizei Node.js para construir APIs RESTful, aplicando métodos HTTP como GET, POST, PUT e DELETE para manipulação eficiente de dados. Além disso, implementei autenticação segura, middleware para controle de requisições e integração com bancos de dados. Para aumentar a robustez do código e reduzir erros em tempo de execução, utilizei TypeScript, garantindo uma base tipada e escalável.

                Para armazenamento de dados, utilizei MongoDB, explorando sua flexibilidade como banco de dados NoSQL para aplicações dinâmicas e de alto desempenho. Além disso, trabalhei com Docker para criar ambientes isolados e facilitar a implantação de projetos, garantindo consistência entre diferentes ambientes de desenvolvimento e produção.

                Essa experiência diversificada me permite desenvolver soluções completas, eficientes e escaláveis, combinando tecnologias modernas para entregar aplicações de alto desempenho e qualidade.
            </Text>
        </BackGround>
    )
}

export default Languages