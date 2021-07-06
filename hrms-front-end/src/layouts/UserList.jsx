import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';


export default function UserList() {
    return (
        <div>
            <Dropdown item text='Menu' className='dropdownMenu'>
            <Dropdown.Menu className="dropdown">
                <Dropdown.Item><a href='/'>
                <Button inverted color='green'>Home</Button></a></Dropdown.Item>
                <Dropdown.Item><a href='/pages/EmployerRegister.jsx'>
                <Button inverted color='teal'>Register</Button></a></Dropdown.Item>
                <Dropdown.Item><a href='/pages/Login.jsx'>
                <Button inverted color='red'>Login</Button></a></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

