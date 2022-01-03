import React, { useState } from 'react'
import { Container, TitleContainer } from './styled'
import ChevronDown from '../../images/chevron_down.svg'

const InputsContainer = ({children, title}) => {

    const [isOpen, setIsOpen] = useState(true)

    return(
        <>
        <TitleContainer isOpen={isOpen}>
            <h2 className="title">{title}</h2>
            <img onClick={() => setIsOpen(!isOpen)} src={ChevronDown} alt="chevron_down" className="chevron" />
        </TitleContainer>
        <Container isOpen={isOpen} >
            {children}
        </Container>
        </>
    )
}

export default InputsContainer