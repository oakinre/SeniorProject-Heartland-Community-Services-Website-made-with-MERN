import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll, Button } from 'react-scroll'
import {Avatar} from '@material-ui/core'
import { Button2 } from '../ButtonElement'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
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

    const user = null;

    return ( 
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> HCS </NavLogo>
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
                        {user ? (
                        // <Avatar alt={user.result.name} src={user.result.imageUrl}>  {user.result.name.charAt(0)} </Avatar>
                        <Button2>Logout</Button2>
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
