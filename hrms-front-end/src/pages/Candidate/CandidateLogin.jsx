import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Container, Button } from 'semantic-ui-react';


export default function CandidateLogin({signIn}) {

    return (
        <div>
            <Button.Group>
    <Button as={NavLink} to="/pages/EmployerLogin.jsx">Employers</Button>
    <Button.Or text='or' />
    <Button as={NavLink} to="/pages/CandidateLogin.jsx" positive>Candidate</Button>
            </Button.Group>
            <hr/>
            <br/>
            <br/>
            <br/>
            <Container>
            <Form>
                <Form.Field>
                    <label className="label">E-Mail</label>
                    <input type="email" />
                </Form.Field>
                <Form.Field>
                    <label className="label">Password</label>
                    <input type="password" />
                </Form.Field>
                <Button type="submit" onClick={signIn}>LogIn</Button>
            </Form>
            <br/>
            <Button as={NavLink} to="/pages/EmployerRegister.jsx " negative>Create account</Button>
            </Container>
        </div>
    )
}
