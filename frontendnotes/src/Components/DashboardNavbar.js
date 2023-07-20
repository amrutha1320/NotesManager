import React from 'react';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import { NavbarBrand } from 'react-bootstrap';

const DashboardNavbar = () =>{
    return(
        <div>
            <Nav>
                <NavMenu>
                    <NavbarBrand style={{color:"white",fontSize:"large"}}>Notes Manager</NavbarBrand>
                    <NavLink to='/dashboard'>Home</NavLink>
                    <NavLink to='/insertnotes'>Insert notes</NavLink>
                    <NavLink to='/viewnotes'>view notes</NavLink>
                    <NavLink to='/'>Logout</NavLink>
                </NavMenu>
            </Nav>
        </div>

    );
}

export default DashboardNavbar;