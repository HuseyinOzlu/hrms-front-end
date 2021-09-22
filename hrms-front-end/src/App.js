import React,{useState} from 'react';
import './App.css';
import Dashboard from './layouts/Dashboard.jsx';
import 'semantic-ui-css/semantic.min.css';
import { Container } from "semantic-ui-react";
import EmployerRegister from './pages/Employer/EmployerRegister';
import { Route } from 'react-router-dom';
import CandidateRegister from './pages/Candidate/CandidateRegister';
import CandidateLogin from './pages/Candidate/CandidateLogin.jsx';
import CandidateContent from './pages/Candidate/CandidateContent';
import Footer from './layouts/Footer';
import { Menu, Search, } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import SignOut from './layouts/SignOut';
import SignIn from './layouts/SignIn';
import EmployerLogin from './pages/Employer/EmployerLogin';
import EmployersContent from './pages/Employer/EmployersContent';
import Content from './pages/Content';


function App() {
    const [isAuthenticated, SetIsAuthenticated] = useState(false);
    const history = useHistory();

    function handleSignIn(){
        SetIsAuthenticated(true);
    }

    function employerSignIn() {
      handleSignIn();
      history.push("/pages/EmployersContent.jsx")
    }

    function candidateSignIn() {
      handleSignIn();
      history.push("/")
    }

    function handleSignOut(){  
        SetIsAuthenticated(false);
        history.push("/")
    }
  return (
      <div className="App">
      <Container>
        <Dashboard/>
      </Container>
      {/**
         * Header layer - {Navi}
         */}
        <Container>
              <div className="header" style={{
                opacity: "0.5"
              }}>
        <Menu inverted fixed="top"  size='mini' style = {{
            background: 'rgb(0, 102, 255)'
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
        </div></Container>
      
      <br/><br/><br/>
        {/**
         * Content Layer
         */}
      <div>
          <Route path="/" exact component={Content}/>
          <Route path="/pages/CandidateContent" exact component={CandidateContent} />
          <Route path="/pages/EmployerRegister.jsx" exact component={EmployerRegister} />
          <Route path="/pages/CandidateRegister.jsx"exact component={CandidateRegister} />
          <Route path="/pages/EmployersContent.jsx" exact component={EmployersContent}/>
          <Route path="/pages/CandidateLogin.jsx" exact><CandidateLogin signIn={candidateSignIn}/> </Route>
          <Route path="/pages/EmployerLogin.jsx" exact ><EmployerLogin signIn={employerSignIn}/></Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
