import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    min-height: 100vh;
    padding-top: 30px;
    padding-bottom: 100px;
    padding-left: 30px;
    padding-right: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #681A1A;
    /* background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    ); */
`;

export  const FormWrap = styled.div `
    margin-top: 30px;
    height: 80%;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Iconz = styled(Link)`
    margin-left: 15px;
    margin-top: 32px;
    
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
        
    }
`;

export const FormContent = styled.div `
    padding-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form `
    background: #fff;
    max-width: 500px;
    height: ${({isSignup}) => (isSignup ? "650px" : "450px" )};
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px 0px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1 `
    margin-bottom: 32px;
    color: #010101;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
`;

export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    background-color: darkgrey;
`;

export const FormButton = styled.button `
    width: 100%;
    background: #681A1A;
    padding: 7px 0px;
    margin-top: 18px;
    margin-bottom: 18px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #101010;
        color: #fff;
    }
`;

export const Text = styled.span `
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const Img = styled.img `
    width: 100%;
    margin: 15px 0 10px 10px;
    padding-right: 0;
    
`;
export const ImgWrap = styled.div `
    max-width: 150px;
    height: 100%;
    
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
`;