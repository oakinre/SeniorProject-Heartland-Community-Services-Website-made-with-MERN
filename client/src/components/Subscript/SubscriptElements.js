import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const SubContainer = styled.footer`
    background-color: #fff;
    
`;

export const SubItems = styled.div `
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SubH1 = styled.h1 `
    color: #681A1A;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 3.5rem;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`
export const SubH3 = styled.h3 `
    color: #010101;
    padding-bottom: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    max-width: 600px;
`
export const SubH4 = styled.p `
    color: darkred;
    padding-bottom: 50px;
    padding-left: 50px;
    font-weight: bold;
    font-size: 1rem;
    max-width: 1000px;
`
export const Subscribe = styled.form `
    min-width: 400px;
    justify-content: left;
   padding-right: 60px;
`;

export const EmailInput = styled.input `
    z-index: 1;
    padding: 15px 36px;
    margin-bottom: 32px;
    outline: none;
    border: solid 2px;
    border-color: grey transparent grey grey;
    border-radius: 1px;
    background-color: white;
`;
export const ArrowForward = styled(MdArrowForward) `
    /* margin-left: 8px; */
    /* font-size: 20px; */
`;

export const ArrowRight = styled(MdKeyboardArrowRight) `
    margin-left: 8px;
    font-size: 20px;
`