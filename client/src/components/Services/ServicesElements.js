import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
export const ServiceContainer = styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: grey;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
        height: 1600px;
    }

    @media screen and (max-width: 480px) {
        height: 1600px;
    }
`

export const ServicesWrapper = styled.div `
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    /* @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    } */

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 350px;
    padding: 40px 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img `
    height: 140px;
    width: 140px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1 `
     font-size: 3.5rem;
     text-decoration: underline;
     color: #fff;
     margin-top: 100px;
     margin-bottom: 200px;

     @media screen and (max-width: 480px) {
         font-size: 2rem;
         
     }
     @media screen and (max-width: 768px) {
        font-size: 3rem;
        margin-top: 75px;
        margin-bottom: 125px;
    }
`

export const ServicesH2 = styled.h2 `
    font-size: 1.3rem;
    text-align: 10px;
`

export const ServicesP = styled.p `
    font-size: 1rem;
    text-align: center;
`

export const ServicesLink1 = styled.a `
    color: #fff;
    font-size: 24px;
`;
export const ServicesLink2 = styled(LinkRouter) `
    color: #fff;
    font-size: 24px;
`;