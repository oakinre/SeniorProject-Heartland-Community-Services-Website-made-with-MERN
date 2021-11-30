import styled from 'styled-components'

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`
export const SubH3 = styled.h3 `
    color: #010101;
    padding-bottom: 30px;
    font-weight: bold;
    font-size: 1.2rem;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: .7rem;
    }
`
