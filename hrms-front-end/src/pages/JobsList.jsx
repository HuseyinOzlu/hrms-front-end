import React, { useEffect, useState } from 'react';
import { Table, Icon, Menu } from 'semantic-ui-react';
import JobService from '../services/jobService';

export default function JobsList() {
    const [jobs, setjobs] = useState([]);
    useEffect(()=>{
        let jobService = new JobService();
        jobService.getJob().then(result=>setjobs(result.data.data));
    })
    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>City Name</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Min. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Job Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{
                    jobs.map(jobs=>(
                        <Table.Row key="{jobs.id}">
                            <Table.Cell>{jobs.cityName}</Table.Cell>
                            <Table.Cell>{jobs.companyName}</Table.Cell>
                            <Table.Cell>{jobs.jobTitle}</Table.Cell>
                            <Table.Cell>{jobs.position}</Table.Cell>
                            <Table.Cell>{jobs.date}</Table.Cell>
                            <Table.Cell>{jobs.minSalary}</Table.Cell>
                            <Table.Cell>{jobs.maxSalary}</Table.Cell>
                            <Table.Cell>{jobs.isJobOpen}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                        <Table.HeaderCell colspan='8'>
                            <Menu floated="right" pagination>
                                <Menu.Item as='c' icon>
                                    <Icon name="chevron left"/>
                                </Menu.Item>
                                <Menu.Item as='c'>1</Menu.Item>
                                <Menu.Item as='c'>2</Menu.Item>
                                <Menu.Item as='c'>3</Menu.Item>
                                <Menu.Item as='c'>4</Menu.Item>
                                <Menu.Item as='c'>5</Menu.Item>
                                <Menu.Item as='c'>6</Menu.Item>
                                <Menu.Item as='c' icon>
                                    <Icon name="chevron right"/>
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                </Table.Footer>
            </Table>
        </div>
    )
}
