import React from 'react';
import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard.jsx';
import 'semantic-ui-css/semantic.min.css';
import { Container } from "semantic-ui-react";
import EmployerRegister from './pages/EmployerRegister';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import CandidateRegister from './pages/CandidateRegister';
import Login from './pages/Login.jsx';
import Content from './pages/Content';




function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
        <Dashboard/>
      </Container>
      <br/><br/><br/>
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/pages/EmployerRegister.jsx" exact component={EmployerRegister} />
          <Route path="/pages/CandidateRegister.jsx"exact component={CandidateRegister} />
          <Route path="/pages/Login.jsx" exact component={Login} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
