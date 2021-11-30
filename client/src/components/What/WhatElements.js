import styled from 'styled-components'

export const EventContainer = styled.div `
    color: #fff;
    background: #6B2929 ;
    /* padding: 100px 0; */
    @media screen and (max-width: 768px) {
        padding: 100px 0;
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
    /* justify-content: center; */
`
export const EventRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* align-items: center; */
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} ;
    }
`

export const Column1 = styled.div `
    z-index: 1;
    background-color: #fff;
    height: 95%;
    width: 100%;
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col1;
    box-shadow: -18px 0px 7px rgba(0,0,0,0.2);
    text-align: center;
    padding: 150px 30px;
    @media screen and (max-width: 768px) {
         width: 100%;
         height: 100%;
         box-shadow: 0px 10px 7px rgba(0,0,0,0.2);
         
     }
    
`

export const Column2 = styled.div `
    z-index: 0;
    height: 95%;
    width: 120%;
    margin-bottom: 15px;
    /* padding: 0 10px; */
    
    grid-area: col2;
    @media screen and (max-width: 768px) {
         width: 100%;
         height: 150%;
     }
`

export const TextWrapper = styled.div `
    /* max-width: 300px; */
    font-size: 20px;
    /* margin-bottom: 20px; */
    padding-top: 0;
    padding-bottom: 10px;
`

export const EventH1 = styled.h1 `
     font-size: 3.5rem;
     /* color: #fff; */
     color: #6B2929; 
     margin-bottom: 30px;
     /* text-decoration: underline 3px;
     text-decoration-color: #6B2929; */
     text-shadow:-3px 5px 0px rgba(0,0,0,0.2);
     @media screen and (max-width: 480px) {
         font-size: 3rem;
     }
`
export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
    
`

export const Img = styled.img `
    width: 100%;
    max-width: 75px;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
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