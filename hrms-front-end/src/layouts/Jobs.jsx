import React, { useEffect, useState } from 'react';
import JobService from '../services/jobService';
import { Button, Header, Modal } from 'semantic-ui-react'


export default function Jobs() {
    const [open, setOpen] = React.useState(false)

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        let jobService = new JobService();
        jobService.getJob().then(result=>setJobs(result.data.data))
    })

    return (
        <div>
            
                
            {
            jobs.map(jobs=>
            <p style={{textShadow: "2px 2px white"}} icon="eye dropper" text="Jobs">
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>{jobs.jobTitle}</Button>}
            ><Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                        </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal></p>
            )
            }
            </div>
    )
}
