import React from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import '../../App.css'


export default function EmployerRegister() {
    return (
        <div>
            <Button.Group>
    <a href="/pages/EmployerRegister.jsx"><Button positive>Employers</Button></a>
    <Button.Or text='or' />
    <a href="CandidateRegister.jsx"><Button>Candidate</Button></a>
            </Button.Group>
            <hr/>
            <br/>
            <br/>
            <br/>
            <Container>
        <Form>
    <Form.Field>
        <label className="label">Company Name</label>
        <input type="text" placeholder='Company Name' />
    </Form.Field>
    <Form.Field>
        <label className="label">Web Address</label>
        <input placeholder='Web Address' type="text" />
    </Form.Field>
    <Form.Field>
        <label className="label">Phone Number</label>
        <input type="tel" placeholder="(5**) *** ** **" />
    </Form.Field>
    <Form.Field>
        <label className="label">E-mail</label>
        <input placeholder="E-mail" type="email" />
    </Form.Field>
    <Form.Field>
        <label className="label">Password</label>
        <input type="Password" placeholder="Password"/>
    </Form.Field>
    <Form.Field>
        <Checkbox className="label" label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Register</Button>
        <br/>
        </Form>
        <br/>
        <a href="/pages/CandidateLogin.jsx"><Button negative>Do you already have an account ?</Button></a>
        </Container>
        </div>
    )
}
