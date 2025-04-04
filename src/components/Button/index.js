import React from "react"

import { ButtonContainer, ButtonIcon } from "./styles"

function Buttons() {
    return (
        <ButtonContainer>
            <a href="https://www.linkedin.com/in/ewerton-prado-desenvolvedor-front-end/" target="_blank" rel="noopener noreferrer">
                <ButtonIcon><i className="bi bi-linkedin"></i></ButtonIcon>
            </a>
            <a href="https://github.com/ewertonprado1910" target="_blank" rel="noopener noreferrer">
                <ButtonIcon><i className="bi bi-github"></i></ButtonIcon>
            </a>
            <a href="https://wa.me/5511999341743" target="_blank" rel="noopener noreferrer">
                <ButtonIcon><i className="bi bi-whatsapp"></i></ButtonIcon>
            </a>
        </ButtonContainer>
    )

}

export default Buttons