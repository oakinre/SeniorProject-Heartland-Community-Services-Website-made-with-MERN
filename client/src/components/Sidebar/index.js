import React, {useEffect, useState} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLink2,
    SideBtnWrap,
    SidebarRouter,
    NavItem2,
    NavItem3,
} from './SidebarElements'
import {useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import {Avatar, Typography} from '@material-ui/core'
import { Button4 } from '../ButtonElement'
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
                    {localStorage?.getItem('title')?.substring(0,5) !== 'Admin' ? (
                    <SidebarLink2 to='/myacc' onClick={toggle} offset={-68}> Account Info </SidebarLink2>
                    ) : (null)}
                </SidebarMenu>
                {user?.result ? (
                            <div>
                            <NavItem3>
                            <Typography  variant="h4" >{user.result.name}</Typography>
                            </NavItem3>
                            <NavItem2>
                            <Button4
                            primary = 'true'
                            dark = 'true' 
                            onClick={logout}>Logout</Button4>
                            </NavItem2>
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
