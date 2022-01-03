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
    z-index:10;
    position: relative;
`;

export const TitleContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    border-bottom: ${props => (props.isOpen ? '' : '1px solid rgb(204, 204, 204)')};

    
    .chevron{
        width:30px;
        cursor:pointer;
        transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
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