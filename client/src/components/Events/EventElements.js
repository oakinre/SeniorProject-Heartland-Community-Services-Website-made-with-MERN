import styled from 'styled-components'

export const EventContainer = styled.div `
    color: #fff;
    background: #6B2929 ;
    /* padding: 100px 0; */
    @media screen and (max-width: 768px) {
        
    }
`

export const EventWrapper = styled.div `
    display: grid;
    z-index: 1;
    /* height: 1000px; */
    min-height: 100vh;
    width: 100%;
    /* max-width: 1100px; */
    margin-right: auto;
    margin-left: auto;
    /* padding: 150px 30px; */
    /* justify-content: right; */
`
export const EventRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* justify-content: right;
    align-items: right; */
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} ;
    }
`

export const Column1 = styled.div `
    background-color: #fff;
    z-index:3;
    height: 100%;
    width: 120%;
    /* margin-top: 30px; */
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col1;
    box-shadow: 25px 25px 7px rgba(0,0,0,0.2);
    text-align: center;
    padding: 200px 30px;
    @media screen and (max-width: 768px) {
         width: 100%;
         margin-top: 0px;
         box-shadow: 0px -10px 7px rgba(0,0,0,0.2);
     }
    
`

export const Column2 = styled.div `
    height: 100%;
    width: 80%;
    justify-self: right;
    margin-bottom: 15px;
    padding: 0 10px;
    text-align: center;
    
    padding: 220px 0px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
         justify-self: center;
     }
`

export const TextWrapper = styled.div `
    /* max-width: 300px; */
    font-size: 9px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const EventH1 = styled.h1 `
     font-size: 3.5rem;
     /* color: #fff; */
     color: #010101;
     margin-bottom: 30px;
     text-decoration: underline 3px;
     text-decoration-color: #6B2929;

     @media screen and (max-width: 480px) {
         font-size: 2rem;
     }
`


export const Img = styled.img `
    width: 100%;
    max-width: 600px;
    margin: 0 0 10px 0;
    padding-right: 0;
`
