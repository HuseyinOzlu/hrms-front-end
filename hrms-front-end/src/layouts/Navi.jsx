import React,{useState} from 'react';
import { Menu, Search, } from 'semantic-ui-react';
import '../App.css'
import { useHistory } from 'react-router';
import SignOut from './SignOut';
import SignIn from './SignIn';

export default function Navi() {
    const [isAuthenticated, SetIsAuthenticated] = useState(true);
    const history = useHistory();

    function handleSignIn(){
        SetIsAuthenticated(true);
        history.push("/")
    }

    function handleSignOut(){  
        SetIsAuthenticated(false);
        history.push("/")
    }

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
        <Menu.Item>
                <Search  className="search" />
                {isAuthenticated ? <SignOut signOut={handleSignOut}/>:<SignIn signIn={handleSignIn} />}
        </Menu.Item>
        </Menu.Menu>
        </Menu>
        </div>
    )
}
