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
            background: '#000'
        }}>
        <Menu.Item>
            
        </Menu.Item>
        <Menu.Item>
            <a href="/"><i>Human Resources Manage System</i></a>
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
