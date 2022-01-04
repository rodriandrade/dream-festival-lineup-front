import styled, { css } from "styled-components";

export const Container = styled.div`
    width:100%;
    margin:0 auto;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius:10px;
    backdrop-filter:blur(13px);
    padding:40px 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    justify-content: center;
    flex-wrap:wrap;
    margin-bottom:40px;
    position: relative;
    z-index:20;

    @media (max-width: 1366px) {
        padding:20px 0;
    }

    @media (max-width: 488px) {
        padding:10px 0;
    }
`;

export const TitleContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    border-bottom: ${props => (props.isOpen ? '' : '1px solid rgb(204, 204, 204)')};
    z-index:20;
    
    .chevron{
        width:30px;
        cursor:pointer;
        transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
        z-index:20;
        //animation: ${props => (props.isOpen ? 'rotateChevron 1s linear' : 'rotateChevron backwards 1s linear')};

        @keyframes rotateChevron {
            0% {
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(180deg);
            }
        }
    }

    @media (max-width: 360px) {
        h2{
            font-size:20px;
        }
        .chevron{
            width:24px;
        }
    }

    @media (max-width: 320px) {
        h2{
            font-size:20px;
        }
        .chevron{
            width:24px;
        }
    }
`;

export const Circle = styled.div`
    width:50%;
    height:500px;
    border-radius: 100%;
    filter: blur(150px);
    background-color: rgba(109, 194, 255, 1);
    position:absolute;
    z-index:-1;
    top:0px;
    left:200px;
`;

export const Circle2 = styled.div`
    width:50%;
    height:500px;
    border-radius: 100%;
    filter: blur(150px);
    background-color: rgba(139, 255, 213, 1);
    position:absolute;
    z-index:-1;
    top:${props => (props.restrictCircle ? '0px' : '400px')};
    right:0px;
`;

export const Circle3 = styled.div`
    width:${props => (props.restrictCircle ? '60%' : '50%')};
    height:600px;
    border-radius: 100%;
    filter: blur(150px);
    background-color: rgba(128, 0, 255, 0.4);
    position:absolute;
    z-index:-1;
    top: ${props => (props.restrictCircle ? '100px' : '800px')};
    right:0px;
`;