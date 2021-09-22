import React from 'react';
import '../../App.css';
import { Grid, GridColumn } from 'semantic-ui-react';
import JobsAdd from '../Jobs/JobsAdd.jsx';
import { Route } from 'react-router';
import EmployerFilter from '../../layouts/EmployerFilter.jsx';

export default function EmployersContent() {
    return (
        <div> 
            <Grid>
                <Grid.Row>
                    <GridColumn className="LeftMenu">
                            <Route exact path="/pages/EmployersContent.jsx" className="LeftMenu" component={EmployerFilter} />
                    </GridColumn>
                    <GridColumn width={11} className="jobsAdd" >
                            <Route exact path="/pages/EmployersContent.jsx" component={JobsAdd}></Route>
                    </GridColumn>
                </Grid.Row>
        </Grid>
        </div>
    )
}
