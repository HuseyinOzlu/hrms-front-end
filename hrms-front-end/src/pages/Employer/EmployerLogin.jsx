import React from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


export default function EmployerLogin({signIn}) {
    return (
        <div>
            <Button.Group>
    <Button as={NavLink} to="/pages/EmployerLogin.jsx" positive>Employers</Button>
    <Button.Or text='or' />
    <Button as={NavLink} to="/pages/CandidateLogin.jsx">Candidate</Button>
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
            <Button as={NavLink} to="/pages/EmployerRegister.jsx" negative>Create account</Button>
            </Container>
        </div>
    )
}
