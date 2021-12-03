import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: #fff;
    font-weight: bold;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon =styled(FaTimes) `
    color: #545859;
    &:hover {
        color: #681A1A;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `
    color: #fff;
    padding: 50px;
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 55px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 55px);
    }
`;

export const SidebarLink = styled(LinkScroll) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #545859;
    cursor: pointer;

    &:hover {
        color: #681A1A;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarLink2 = styled(LinkRouter) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #545859;
    cursor: pointer;

    &:hover {
        color: #681A1A;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`;

export const SidebarRouter = styled(LinkRouter) `
    border-radius: 50px;
    background: #681A1A;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #fff;
    }
`;
export const NavItem2 = styled.div `
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;
export const NavItem3 = styled.div `
    color: #010101;
    display: flex;
    justify-content: center;
    height: 80px;
`;
export const NavMenu2 = styled.ul `
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;

    @media screen and (max-width: 980px) {
        display: none;
    }
`;
