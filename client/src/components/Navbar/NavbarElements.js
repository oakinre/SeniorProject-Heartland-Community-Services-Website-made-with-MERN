import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#681A1A' : 'transparent')};
    height: 70px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.4s all ease;
    overflow: hidden;
    @media screen and (max-width: 980px) {
        transition: 0.4s all ease;
    }

`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
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

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 980px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul `
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;

    @media screen and (max-width: 980px) {
        display: none;
    }
`;
export const NavMenu2 = styled.ul `
        display: flex;
        padding-top: 20px;
        padding-left: 30px;
        padding-right: 20px;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;

    @media screen and (max-width: 980px) {
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;
export const NavItem2 = styled.li `
    color: #fff;
    padding: 0 10px;
    height: 80px;
`;
export const NavItem3 = styled.li `
    color: #fff;
    font-weight:bold ;
    padding: 5px 10px;
    height: 80px;
`;

export const NavLinks = styled(LinkScroll) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    justify-content: left;

    &.active {
        background-color: darkred;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        transition: 0.4s all ease;
        
        /* border-bottom: 3px solid #fff; */
    }
    &:hover {
        color: grey;
        transition: 0.2s ease-in-out;
    }

`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    justify-content: left;

    @media screen and (max-width: 980px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter) `
    border-radius: 50px;
    background: #6B2929;
    color: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #681A1A;
    }
`;

export const Img = styled.img `
    width: 100%;
    margin: 15px 0 10px 10px;
    padding-right: 0;
    
`
export const ImgWrap = styled.div `
    max-width: 150px;
    height: 100%;
    
`

