import styled from 'styled-components'

export const InfoBorder = styled.div `
    display: flex;
    color: #6B2929;
    background: #6B2929;
    padding-top: 9vh;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    min-height: 100vh;
    height: fit-content;
    justify-content: center;
    @media screen and (max-width: 768px) {
        /* padding: 30px 30px; */
        height: fit-content;
    }
`
export const InfoContainer = styled.div `
    display: flex;
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#6B2929')};
    height: fit-content;
    box-shadow: 25px 25px 7px rgba(0,0,0,0.2);
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 10px 0;
    }
`

export const InfoWrapper = styled.div `
    z-index: 1;
    min-height: 75vh;
    padding: 8% 0 0 0;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        min-height: 85vh;
        padding: 30px;
    }
`
export const InfoRow = styled.div `
    align-items: center;
`

// export const Column1 = styled.div `
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `

// export const Column2 = styled.div `
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `

export const TextWrapper = styled.div `
    max-width: 1700px;
    padding: 0 150px 60px 150px;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding: 0 0 60px 0;
    }
`

export const TopLine = styled.p `
    color: #060606;
    height: 120px;
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
    letter-spacing: -4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-decoration: 4px underline #681A1A;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    /* border-bottom: 2px solid #681A1A; */
`

// export const Heading = styled.h1 `
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606' )};
//     @media screen and (max-width: 480px) {
//         font-size: 32px;
//     }
// `

export const Subtitle = styled.p `
    /* max-width: 440px; */

    margin-bottom: 35px;
    font-size: 30px;
    line-height: 33px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const BtnWrap = styled.div `
    display: flex;
    justify-content: center;

`

// export const ImgWrap = styled.div `
//     max-width: 555px;
//     height: 100%;
// `

// export const Img = styled.img `
//     width: 100%;
//     margin: 0 0 10px 0;
//     padding-right: 0;
// `

// export const InfoRow = styled.div `
//     /* display: grid; */
//     /* grid-auto-columns: minmax(auto, 1fr); */
//     /* display: flex; */
//     align-items: center;
//     /* grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 768px) {
//         grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} ;
//     } */
// `