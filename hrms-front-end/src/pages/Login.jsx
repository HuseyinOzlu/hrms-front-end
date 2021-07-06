import React from 'react';
import { Form, Container, Button } from 'semantic-ui-react';


export default function Login() {
    return (
        <div>
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
                <Button type="submit">LogIn</Button>
            </Form>
            <br/>
            <a href="/pages/EmployerRegister.jsx"><Button negative>Create account</Button></a>
            </Container>
        </div>
    )
}
