import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import '../App.css';
import Jobs from './Jobs';


export default class MenuExampleSubMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    jobs(){
        if(document.getElementById("JobList").style.display === "none"){
        document.getElementById("JobList").style.display = "block";
        }
        else{
            document.getElementById("JobList").style.display = "none";
        }
        /*
            * TODO: Add the jobs Name to MY List on EmployerFilter from Database(Line 38)(foreach)
        */
}

    render() {
        const { activeItem } = this.state;

        return (
        <Menu vertical style={{backgroundColor : ('#8B8B9B')}}>
            <Menu.Item>
            <h4><i className="headerCandidate">Employer</i></h4>
            </Menu.Item>

            <Menu.Item
            onClick={this.jobs}>
                My List
            </Menu.Item>
                    <Menu.Item id="JobList" style={{display: "none", backgroundColor: "#adff"}}>
                        <Jobs/>
                    </Menu.Item>
            <Menu.Item
            name="Work Add"
            active={activeItem === 'CV_Add'}
            onClick={this.handleItemClick}
            className="Cv">
                <Icon name="plus circle" color="blue" className="CvIcon" />
                Work Add
                </Menu.Item>
        </Menu>
        )
    }
    }
