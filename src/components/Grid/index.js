import React from 'react'
import {GridContainer, ColContainer } from './styled'

const Grid = ({children, ...props}) => {

    return(
        <GridContainer
            colGap={props.colGap}
            rowGap={props.rowGap}
            columns={props.columns}
            table={props.table}
        >
            {children}
        </GridContainer>
    )
}

const Col = ({children, ...props}) => {
    return(
        <ColContainer 
            desktop={ props.desktop } 
            tablet={ props.tablet }
            mobile={ props.mobile }
            align={ props.align }
            color={ props.color }
        >
            {children}
        </ColContainer>
    )
}

export { Grid, Col }