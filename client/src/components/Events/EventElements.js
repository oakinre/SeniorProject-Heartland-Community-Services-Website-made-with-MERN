import styled from 'styled-components'

export const EventContainer = styled.div `
    color: #fff;
    background: #6B2929 ;
    /* padding: 100px 0; */
    @media screen and (max-width: 768px) {
        padding: 125px 0;
    }
`

export const EventWrapper = styled.div `
    display: grid;
    z-index: 1;
    /* height: 1000px; */
    min-height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const EventRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} ;
    }
`

export const Column1 = styled.div `
    height: 70%;
    width: 100%;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
`

export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div `
    /* max-width: 300px; */
    font-size: 9px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const EventH1 = styled.h1 `
     font-size: 2.5rem;
     color: #fff;
     margin-bottom: 30px;
     text-decoration: underline 2px;

     @media screen and (max-width: 480px) {
         font-size: 2rem;
     }
`
export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
