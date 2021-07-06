import React from 'react';
import { Menu, Search, } from 'semantic-ui-react';
import UserList from './UserList';
import '../App.css'


export default function Navi() {
    return (
        <div className="header">
        <Menu inverted fixed="top" size='mini' style = {{
            background: '#8B8B98'
        }}>
        <Menu.Item>
            
        </Menu.Item>
        <Menu.Item>
            <h1><i>Human Resources Manage System</i></h1>
        </Menu.Item>
        <Menu.Menu position='right' >
                <Search  className="search" />
        <Menu.Item>
            <UserList />
        </Menu.Item>
        </Menu.Menu>
        </Menu>
        </div>
    )
}
