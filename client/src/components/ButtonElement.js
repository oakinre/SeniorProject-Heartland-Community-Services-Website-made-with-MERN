import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link) `
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#681A1A' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#010606' )};
        color: ${({dark}) => (dark ? '#6B2929' : '#fff')};
    }
`;

export const Button2 = styled(Link) `
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#6B2929' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 4px 4px 3px rgba(0,0,0,0.5);
        transition: all 0.1s ease-in-out;
        background: ${({primary}) => (!primary ? '#fff' : '#010606' )};
        color: ${({dark}) => (!dark ? '#6B2929' : '#fff')};
    }
`;

export const Button3 = styled.button `
    z-index: 2;
    position: absolute;
    border-radius: 1px;
    background: ${({primary}) => (primary ? '#6B2929' : '#010606')};
    white-space: nowrap;
    padding: 16px 24px;
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    justify-self: center;
    align-self: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 4px 4px 3px rgba(0,0,0,0.5);
        transition: all 0.1s ease-in-out;
        background: ${({primary}) => (!primary ? '#fff' : '#010606' )};
        color: ${({dark}) => (!dark ? '#6B2929' : '#fff')};
    }
`;

export const Button4 = styled.button `
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#6B2929' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 4px 4px 3px rgba(0,0,0,0.5);
        transition: all 0.1s ease-in-out;
        background: ${({primary}) => (!primary ? '#fff' : '#010606' )};
        color: ${({dark}) => (!dark ? '#6B2929' : '#fff')};
    }
`;