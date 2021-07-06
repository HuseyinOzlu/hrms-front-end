import React from 'react';
import '../App.css';
import CandidateList from './CandidateList';
import EmployerList from './EmployerList';
import JobsList from './JobsList';

export default function Content() {
    return (
        <div>
        <div className="content" style={{backgroundColor : ('#8B8B98')}}>
            <h1 className="tags">Candidate List</h1>
            <CandidateList/>
        </div>
        <br/>
        <div className="content" style={{backgroundColor : ('#8B8B98')}}>
            <h1 className="tags">Employer List</h1>
            <EmployerList/>
        </div>
        <br></br>
        <div className="content" style={{backgroundColor : ('#8B8B9B')}}>
            <h1 className="tags">Jobs List</h1>
            <JobsList/>
        </div>
        </div>
    )
}
