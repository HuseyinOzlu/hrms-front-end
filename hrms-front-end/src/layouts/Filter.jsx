import React, { Component } from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'
import '../App.css';


export default class MenuExampleSubMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <Menu vertical style={{backgroundColor : ('#8B8B9B')}}>
            <Menu.Item>
            <h4><i className="headerCandidate">Candidate</i></h4>
            </Menu.Item>

            <Menu.Item>
                <Dropdown Item text="Jobs List">
                    <Dropdown.Menu>
                        <Dropdown.Item icon="building" text="Company Name"></Dropdown.Item>
                        <Dropdown.Item icon="eye dropper" text="Job Title"></Dropdown.Item>
                        <Dropdown.Item icon="id badge" text="Job Position"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <Menu.Menu>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item
            name="CV Add"
            active={activeItem === 'CV_Add'}
            onClick={this.handleItemClick}
            className="Cv">
                <Icon name="plus circle" color="blue" className="CvIcon" />
                Cv Add
                </Menu.Item>
        </Menu>
        )
    }
    }
