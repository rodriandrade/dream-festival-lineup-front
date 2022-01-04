import styled, { css } from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: ${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "space-evenly";
        case "Fantasy 01":
            if(props.direction){
                return "flex-end"
            } else {
                return "flex-start";
            }
        }
    }};
    align-items: center;
    width:80%;
    margin:20px 0;
    flex-wrap:wrap;
    font-family: ${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "'Passion One', cursive";
        case "Fantasy 01":
            return "'Philosopher', cursive;";
        }
    }};

    @media (max-width: 1366px) {
        width:90%;
    }
`;

export const Headliners = styled.h1`
    font-size:${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "44px";
            case "Fantasy 01":
                return "36px";
        }
    }};
    text-transform:uppercase;
    color: ${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "rgba(20,20,20)";
            case "Fantasy 01":
                return "#fff";
        }
    }};
    margin:${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "0 17px ";
            case "Fantasy 01":
                return "0px 15px 0 0";
        }
    }};
    position:relative;
    background: ${props => (props.theme === "Fantasy 01" ? 'rgb(255,255,255)' : '')};
    background: ${props => (props.theme === "Fantasy 01" ? `linear-gradient(180deg, rgba(255,255,255,1) 20%, ${props.color} 100%)` : '')};
    background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-text-fill-color: ${props => (props.theme === "Fantasy 01" ? 'transparent' : '')};

    ${(props) => {
        switch (props.theme) {
        case "Lollapalooza":
            return `
                ::after{
                    content:"";
                    width:12px;
                    height:12px;
                    background-color: ${props.randomColor};
                    position:absolute;
                    transform: translateX(90%) rotate(45deg);
                    top: 17px;
                };
                :last-of-type{
                    ::after{
                        content:"";
                        width:0;
                        height:0;
                    }
                }
                @media (max-width: 1366px) {
                    ::after{
                        content:"";
                        width:9px;
                        height:9px;
                        transform: translateX(150%) rotate(45deg);
                        top: 13px;
                    };
                }
            `
        }
    }};

    :first-of-type{
        margin-left:0px;
    }

    @media (max-width: 1366px) {
        font-size:${(props) => {
            switch (props.theme) {
                case "Lollapalooza":
                    return "30px";
                case "Fantasy 01":
                    return "20px";
            }
        }};
    }
`;

export const SecondaryHeadliners = styled.span`
    font-size:${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "26px";
            case "Fantasy 01":
                return "22px";
        }
    }};
    text-transform:uppercase;
    color: ${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "rgba(20,20,20)";
        case "Fantasy 01":
            return "#fff";
        }
    }};
    margin:${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "0 17px";
        case "Fantasy 01":
            return "5px 15px 0 0";
        }
    }};
    position:relative;
    font-weight:${props => (props.theme === "Fantasy 01" ? '700' : '')};
    background: ${props => (props.theme === "Fantasy 01" ? 'rgb(255,255,255)' : '')};
    background: ${props => (props.theme === "Fantasy 01" ? `linear-gradient(180deg, rgba(255,255,255,1) 20%, ${props.color} 100%)` : '')};
    background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-text-fill-color: ${props => (props.theme === "Fantasy 01" ? 'transparent' : '')};

    :first-of-type{
        margin-left:0px;
    }

    ${(props) => {
        switch (props.theme) {
        case "Lollapalooza":
            return `
                ::after{
                    content:"";
                    width:8px;
                    height:8px;
                    background-color: ${props.randomColor};
                    position:absolute;
                    transform: translateX(160%) rotate(45deg);
                    top: 10px;
                };
                :last-of-type{
                    ::after{
                        content:"";
                        width:0;
                        height:0;
                    }
                }
                @media (max-width: 1366px) {
                    ::after{
                        content:"";
                        width:5px;
                        height:5px;
                        transform: translateX(170%) rotate(45deg);
                        top: 7px;
                    };
                }
            `
        }
    }};

    @media (max-width: 1366px) {
        font-size:${(props) => {
            switch (props.theme) {
                case "Lollapalooza":
                    return "18px";
                case "Fantasy 01":
                    return "14px";
            }
        }};
        margin:${(props) => {
            switch (props.theme) {
                case "Lollapalooza":
                    return "0 10px";
                case "Fantasy 01":
                    return "2px 15px 2px 0";
            }
        }};
    }
`;

export const OtherArtists = styled.span`
    font-size:${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "20px";
            case "Fantasy 01":
                return "16px";
        }
    }};
    text-transform:uppercase;
    color: ${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "rgba(20,20,20)";
        case "Fantasy 01":
            return "#fff";
        }
    }};
    margin:${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "0 8px";
        case "Fantasy 01":
            return "5px 15px 0 0";
        }
    }};
    font-weight:${props => (props.theme === "Fantasy 01" ? '700' : '')};
    background: ${props => (props.theme === "Fantasy 01" ? 'rgb(255,255,255)' : '')};
    background: ${props => (props.theme === "Fantasy 01" ? `linear-gradient(180deg, rgba(255,255,255,1) 20%, ${props.color} 100%)` : '')};
    background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-background-clip: ${props => (props.theme === "Fantasy 01" ? 'text' : '')};
    -webkit-text-fill-color: ${props => (props.theme === "Fantasy 01" ? 'transparent' : '')};

    position:relative;

    ${(props) => {
        switch (props.theme) {
        case "Lollapalooza":
            return `
                ::after{
                    content:"";
                    width:5px;
                    height:5px;
                    background-color: ${props.randomColor};
                    position:absolute;
                    transform: translateX(120%) rotate(45deg);
                    top: 8px;
                };
                :last-of-type{
                    ::after{
                        content:"";
                        width:0;
                        height:0;
                    }
                }
                @media (max-width: 1366px) {
                    ::after{
                        content:"";
                        width:4px;
                        height:4px;
                        transform: translateX(160%) rotate(45deg);
                        top: 6px;
                    };
                }
            `
        }
    }};
    
    
    :first-of-type{
        margin-left:0px;
    }

    @media (max-width: 1366px) {
        font-size:${(props) => {
            switch (props.theme) {
                case "Lollapalooza":
                    return "16px";
                case "Fantasy 01":
                    return "12px";
            }
        }};
        margin:${(props) => {
        console.log(props)
            switch (props.theme) {
                case "Fantasy 01":
                    return "2px 15px 2px 0";
            }
        }};
    }
`;

export const DayTitle = styled.span`
    font-size:28px;
    text-transform:uppercase;
    color: ${props => (props.color && props.color)};
    margin:${(props) => {
        console.log(props)
        switch (props.theme) {
        case "Lollapalooza":
            return "0 7px";
        case "Fantasy 01":
            return "0";
        }
    }};
    text-shadow: ${props => (props.theme === "Lollapalooza" ? '-1px 1px 3px #272727' : '')};
    text-shadow: ${props => (props.theme === "Lollapalooza" ? '2px 2px 0 #2d2d2d, 2px -2px 0 #2d2d2d, -2px 2px 0 #2d2d2d, -2px -2px 0 #2d2d2d, 2px 0px 0 #2d2d2d, 0px 2px 0 #2d2d2d, -2px 0px 0 #2d2d2d, 0px -2px 0 #2d2d2d' : '')};

    @media (max-width: 1366px) {
        font-size:22px;
    }
`;

export const DayContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:${(props) => {
        switch (props.theme) {
            case "Lollapalooza":
                return "center";
            case "Fantasy 01":
                if(props.direction){
                    return "end"
                } else {
                    return "flex-start";
                }
            }
        }};
    flex-wrap:wrap;
`;