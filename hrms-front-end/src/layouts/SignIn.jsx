import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


export default function SignIn({signIn}){
    return (
        <div>
            <Dropdown item text='Menu' className='dropdownMenu'>
            <Dropdown.Menu className="dropdown">
                <Dropdown.Item as={NavLink} to="/">
                <Button inverted color='green'>Home</Button></Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/pages/EmployerRegister.jsx">
                <Button inverted color='teal'>Register</Button></Dropdown.Item>
                <Dropdown.Item signIn={signIn} as={NavLink} to="/pages/EmployerLogin.jsx">
                <Button inverted  color='red'>Login</Button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div> 
    )
}

