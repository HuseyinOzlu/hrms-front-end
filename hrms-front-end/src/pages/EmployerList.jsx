import React, {useEffect, useState} from 'react'
import EmployerService from '../services/employerService';
import { Table, Menu, Icon } from 'semantic-ui-react';

export default function EmployerList() {
    const [employers, setEmployer] = useState([]);
    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployer().then(result=>setEmployer(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Company Web Site</Table.HeaderCell>
                    <Table.HeaderCell>Company Phone</Table.HeaderCell>
                    <Table.HeaderCell>Company Mail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    employers.map(employer=>(
                        <Table.Row key="{employer.id}">
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.companyWebSite}</Table.Cell>
                            <Table.Cell>{employer.companyPhone}</Table.Cell>
                            <Table.Cell>{employer.mail}</Table.Cell>
                        </Table.Row>
                    )
                        )
                }
                </Table.Body>
                <Table.Footer>
                    <Table.HeaderCell colspan="4">
                        <Menu floated="right" pagination>
                            <Menu.Item as="b">
                                <Icon name='chevron left'/>
                            </Menu.Item>
                            <Menu.Item as="b">1</Menu.Item>
                            <Menu.Item as="b">2</Menu.Item>
                            <Menu.Item as="b">3</Menu.Item>
                            <Menu.Item as="b">4</Menu.Item>
                            <Menu.Item as="b">5</Menu.Item>
                            <Menu.Item as="b">
                                <Icon name='chevron right'/>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Footer>
            </Table>
        </div>
    )
}
