import React, {useEffect, useState} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter,
    NavItem2,
    NavItem3,
    NavMenu2
} from './SidebarElements'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import {Avatar, Typography} from '@material-ui/core'
const Sidebar = ({ isOpen, toggle }) => {

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
                                <SideBtnWrap onClick={logout}>Logout</SideBtnWrap>
                                </NavItem2>
                                </NavMenu2>
                            </div>
                        ) : (
                <SideBtnWrap>
                    <SidebarRouter to='/auth'>Sign In</SidebarRouter>
                </SideBtnWrap>
                        )}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
