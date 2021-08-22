import React, { useEffect, useState } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import CandidateService from '../../services/candidateService';

export default function CandidateList() {
    const [candidates, setCandidate] = useState([]);
    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidate().then(result=>setCandidate(result.data.data))
    }
    )

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        <Table.HeaderCell>Birt Day</Table.HeaderCell>
                        <Table.HeaderCell>E-Mail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                    candidates.map(candidate=>(
                        <Table.Row key="{candidate.id}">
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.identityNumber}</Table.Cell>
                            <Table.Cell>{candidate.birthday}</Table.Cell>
                            <Table.Cell>{candidate.mail}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.HeaderCell colspan='5'>
                        <Menu floated="right" pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left'/>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a'>5</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right'/>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Footer>
            </Table>
            
        </div>
    )
}
