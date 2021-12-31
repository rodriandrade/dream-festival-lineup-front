import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(12, 1fr);
    //grid-template-columns: ${(props) => (props.columns ? "repeat(10, 1fr)" : "repeat(12, 1fr)")};
    //background-color: rgb(10,10,10);
    grid-column-gap: ${props => props.colGap || 0}px;
    grid-row-gap: ${props => props.rowGap || 0}px;
    width:100%;
    padding:${props => props.table ? '40px' : ''};
    border-bottom:${props => props.table ? '1px solid rgb(30,30,30)' : ''};
    justify-items: center;
    //border:1px solid blue;

    @media (max-width: 480px) {
        grid-template-columns: repeat(12, 1fr);
    }
`

const ColContainer = styled.div`
    grid-column: span ${props => props.desktop || 12};
    @media (max-width: 768px) {
        grid-column: span ${props => props.tablet || '12'};
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '12'};
    }
    position:relative;
    align-self: ${props => props.align || 'center'};
    justify-self: center;
    width:100%;
    background-color:${props => props.color || ''};
`

export { GridContainer, ColContainer }