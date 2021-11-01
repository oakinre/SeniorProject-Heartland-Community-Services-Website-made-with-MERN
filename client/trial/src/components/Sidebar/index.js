import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} offset={-68}> About </SidebarLink>
                    <SidebarLink to='what' onClick={toggle} offset={-68}> What We Do </SidebarLink>
                    <SidebarLink to='events' onClick={toggle} offset={-68}> Events </SidebarLink>
                    <SidebarLink to='services' onClick={toggle} offset={-68}> Get Involved </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to='/signin'>Sign In</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
