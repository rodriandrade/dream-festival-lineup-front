import styled, { css } from "styled-components";
import ModalBack from '../src/images/fantasy_background.png'

export const DayInputs = styled.div`
    display: ${props => (props.reveal ? 'flex' : 'none')};
    flex-direction:column;
    width:100%;

    @media (max-width: 488px) {
        width:100%;
    }
`;

export const Tab = styled.span`
    color: ${props => (props.selected ? 'rgb(20,20,20)' : 'rgb(150,150,150)')};
    font-size:24px;
    font-weight:${props => (props.selected ? '600' : '300')};
    border-bottom:${props => (props.selected ? '2px solid rgba(20,20,20)' : '')};
    cursor:pointer;
    margin:40px 0;

    @media (max-width: 488px) {
        font-size:20px;
    }
`;

export const Separator = styled.div`
    border: 2px solid rgba(20,20,20);
    border-radius:100px;
    text-align:center;
    padding:10px 0;
    font-size:36px;
    font-family: 'Philosopher', sans-serif;
    font-weight: 700;
    margin:10px 0;

    @media (max-width: 488px) {
        font-size:26px;
    }
`;

export const ThemesContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
`;

export const ThemeContainer = styled.div`
    width:250px;
    //margin:40px;
    margin:40px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    cursor:pointer; 

    p{
        font-size:18px;
        padding:10px;
        color: rgba(20,20,20)
    }
`;

export const ImageContainer = styled.div`
    width:250px;
    height:300px;
    background-color: ${props => (props.themeSelected ? 'rgba(50,50,50)' : '')};
    border-radius:10px;
    position:relative;

    .themeSelected{
        background-color: red;
        width:250px;
        height:300px;
        position:absolute;
        top:0;
    }

    .checkIcon{
        width:80px;
        position:absolute;
        opacity:1;
        color: #fff;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }
`;

export const ThemeImage = styled.img`
    width:250px;
    height:300px;
    opacity: ${props => (props.themeSelected ? '0.5' : '1')};
    filter: ${props => (props.themeSelected ? 'blur(5px)' : '')};
    //background-image: ${props => (props.theme ? 'url("/src/images/lolla-theme.png")' : '')};
    border-radius:10px;
`;

export const Inner = styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

export const Modal = styled.div`
    width:100%;
    height:100vh;
    background-color: rgba(20,20,20,0.9);
    z-index:100000000000000000000000000;
    position:fixed;
    top:0;
    display:flex;
    justify-content: center;
    align-items: center;

    img{
        width:95%;
    }

    span{
        font-size:16px;
        margin:20px 0 40px 0;
    }

    .modalCont{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        position:relative;
    }

    .circleModal1{
        width:150px;
        height: 150px;
        border-radius: 100px;
        background-color: rgba(109, 194, 255, 1);
        filter: blur(80px);
        position:absolute;
        z-index:-1;
        top:0px;
        left:0px;
    }

    .circleModal2{
        width:150px;
        height: 150px;
        border-radius: 100px;
        background-color: rgba(139, 255, 213, 1);
        filter: blur(80px);
        position:absolute;
        z-index:-1;
        top:400px;
        right:0px;
    }

    .circleModal3{
        width:150px;
        height: 150px;
        border-radius: 100px;
        background-color: rgba(128, 0, 255, 0.4);
        filter: blur(80px);
        position:absolute;
        z-index:-1;
        top:400px;
        left:0px;
    }

    .close{
        width:20px;
        position:absolute;
        top:-40px;
        right:20px;
    }
`;