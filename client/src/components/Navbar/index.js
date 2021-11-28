import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import {Avatar, Typography} from '@material-ui/core'
import { Button2 } from '../ButtonElement'
import img from '../../images/hcs.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavMenu2,
    NavItem, 
    NavItem2,
    NavItem3,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ImgWrap,
    Img
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
  };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return ( 
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    
                    <NavLogo to='/' onClick={toggleHome}>  
                    <ImgWrap>
                    <Img src={img} alt="HCS"/>
                    </ImgWrap>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='what' smooth={true} duration={500} spy={true} exact='true' offset={-70}>What We Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='events' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Events</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Get Involved</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                        {user ?.result ? (
                            <div >
                                <NavMenu2>
                                <NavItem2>
                                <Avatar alt={user.result.name} src={user.result.imageUrl}>  {user.result.name.charAt(0)} </Avatar>
                                </NavItem2>
                                <NavItem3>
                                <Typography  variant="h6" >{user?.result.name}</Typography>
                                </NavItem3>
                                <NavItem2>
                                <Button2 onClick={logout}>Logout</Button2>
                                </NavItem2>
                                </NavMenu2>
                            </div>
                        ) : (
                        <NavBtn>
                            <NavBtnLink to ='/auth'>Sign In</NavBtnLink>
                        </NavBtn>
                        )} 
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
