import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const FirstContainer = styled.div `
    background: #0c0c0c;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 30px;
    min-height: calc(100vh + 10px);
    position: relative;
    z-index: 1;
    overflow: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const FirstBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const FirstContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: static;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

export const FirstH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;
    max-width: 500px;
    @media screen and (max-width: 768px) {
        font-size: 43px
    }

    @media screen and (max-width: 480px) {
        font-size: 43px;
    }
`;

export const FirstPara = styled.p `
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const FirstBtnWrap = styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward) `
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight) `
    margin-left: 8px;
    font-size: 20px;
`