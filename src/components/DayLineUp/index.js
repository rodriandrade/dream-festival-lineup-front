import {Container, Headliners, SecondaryHeadliners, OtherArtists, DayTitle, DayContainer} from './styled'

const DayLineUp = ({day, color, headliners, secondaryHeadliners, otherArtists, theme, direction, randomColor}) => {

    return(
        <Container theme={theme} direction={direction}>
            <DayTitle day={day} color={color} theme={theme}>{day}</DayTitle>
            <DayContainer theme={theme} direction={direction}>
                {headliners && headliners.map(headliner => ( <Headliners theme={theme} color={color} randomColor={randomColor}>{headliner}</Headliners>))}
            </DayContainer>
            <DayContainer theme={theme} direction={direction}>
                {secondaryHeadliners && secondaryHeadliners.map(secondary => ( <SecondaryHeadliners theme={theme} color={color} randomColor={randomColor} >{secondary}</SecondaryHeadliners>))}
            </DayContainer>
            <DayContainer theme={theme} direction={direction}>
                {otherArtists && otherArtists.map(other => ( <OtherArtists theme={theme} color={color} randomColor={randomColor}>{other}</OtherArtists>))}
            </DayContainer>
        </Container>
    )
}

export default DayLineUp