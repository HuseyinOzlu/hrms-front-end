import React, { useEffect, useState } from 'react';
import { Table, Icon, Menu, Segment} from 'semantic-ui-react';
import JobService from '../../services/jobService';
import { Alert } from '@material-ui/lab';
        
export default function JobsList() {
    const [jobs, setjobs] = useState([]);
    useEffect(()=>{
        let jobService = new JobService();
        jobService.getJob().then(result=>setjobs(result.data.data));
    })
    


    return (
        <div><div className="content">
            <Table>
                <Table.Header>
                    <Table.HeaderCell colspan="8" style={{backgroundColor: ("#8B8B9B")}} textAlign="center" className="tags">
                        Jobs List
                    </Table.HeaderCell>
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
                                <Table.Cell> <Segment>
                                        {String(jobs.cityName)}
                                    </Segment></Table.Cell>
                                <Table.Cell><Segment>{String(jobs.companyName)}</Segment></Table.Cell>
                                <Table.Cell><Segment>{jobs.jobTitle}</Segment></Table.Cell>
                                <Table.Cell><Segment>{jobs.position}</Segment></Table.Cell>
                                <Table.Cell><Segment>{jobs.date}</Segment></Table.Cell>
                                <Table.Cell><Segment>{jobs.minSalary}</Segment></Table.Cell>
                                <Table.Cell><Segment>{jobs.maxSalary}</Segment></Table.Cell>
                                <Table.Cell className={String(jobs.jobOpen) === 'true' ? 'add': "don't" }>
                                    <Segment className="add">
                                            {String(jobs.jobOpen) === 'true' ? <Alert severity="success" className='truTick' />:
                                                <Alert severity="error" className='falseTick'/>}
                                    </Segment>
                                </Table.Cell>
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
        </div>
    )
}
