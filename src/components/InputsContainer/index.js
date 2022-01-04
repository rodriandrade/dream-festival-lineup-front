import React, { useState } from 'react'
import { Container, TitleContainer, Circle, Circle2, Circle3 } from './styled'
import ChevronDown from '../../images/chevron_down.svg'

const InputsContainer = ({ children, title, restrictCircle, isMobile }) => {

    const [isOpen, setIsOpen] = useState(true)

    /*

    <Circle />
            <Circle2 restrictCircle={restrictCircle} />
            <Circle3 restrictCircle={restrictCircle} />

    */

    return(
        <>
        <TitleContainer isOpen={isOpen}>
            <h2 className="title">{title}</h2>
            <img onClick={() => setIsOpen(!isOpen)} src={ChevronDown} alt="chevron_down" className="chevron" />
        </TitleContainer>
        <Container isOpen={isOpen} >
            {isMobile ?
                <>
                <Circle />
                <Circle2 restrictCircle={restrictCircle} />
                <Circle3 restrictCircle={restrictCircle} />
                </>
            : 
                null
            } 
            {children}
        </Container>
        </>
    )
}

export default InputsContainer