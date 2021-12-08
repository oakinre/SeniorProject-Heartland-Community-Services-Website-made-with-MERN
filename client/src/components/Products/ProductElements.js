import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    min-height: 692px;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 100px;
    /* position: fixed; */
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #fff;
    /* background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    ); */
`;

export  const FormWrap = styled.div `
padding: 0px 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #681A1A;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div `
    height: 100%;
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form `
    background: #681A1A; //#010101
    /* max-width: 400px; */
    height: auto;
    width: 95%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    margin: 0 auto;
    display: grid;
    
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;
// export const Form2 = styled.div `
//     width: 100%;
//     grid-template-columns: 1fr 1fr;
//     align-items: center;
//     align-content: center;
//     justify-content: center;
//     grid-gap: 16px; 
// `
export const FormH1 = styled.h1 `
    margin-bottom: 40px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-shadow:-7px 7px 0px rgba(0,0,0,0.2);
    
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    display: grid;
    
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input `
    outline: none;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;
export const FormInput2 = styled.textarea `
    resize: none;
    outline: none;
    padding: 16px 16px;
    height: 200px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button `
    background: white;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #010101;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        transform: scale(1.02);
        box-shadow:-7px 7px 0px rgba(0,0,0,0.2);
        color: #681A1A;
    }
`;

export const Text = styled.span `
    text-align: center;
    margin-top: 24px;
    color: #010101;
    font-size: 14px;
`;

export const DropDownContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const DropDownHeader = styled.div`
  /* margin-bottom: 0.8em; */
  background-color: #fff;
  padding: 0.4em 0em 0.4em 0.7em;
  border: darkgrey solid 1px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #010101;
  &:hover {
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
`;

export const DropDownList = styled.ul`
  padding-right: 100px;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #010101;
  font-size: 1rem;
  font-weight: 500;
  
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
    cursor: pointer;
  }
`;
export const SubH4 = styled.p `
    color: #fff;
    padding-bottom: 50px;
    padding-left: 50px;
    font-weight: bold;
    font-size: 1rem;
    max-width: 1000px;
`