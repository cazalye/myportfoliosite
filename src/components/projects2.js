// This whole file needs to be redone to have a proper MVC.

import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText} from 'react-mdl';
import {Categories} from '../data/projects.data';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategories() {

        let projects = Categories[this.state.activeTab].projects;

        let projects_content = [];

        for (let project of projects) {

            let divStyle = {
                background: 'url(' + project.image + ') center/cover',
                color: 'white',
                height:'176px',
            };
        
            let icons_content = [];

            for (let icon of project.icons) {
                icons_content.push(
                    <a href={icon.link} rel="noopener noreferrer" target="_blank">
                    <i className={icon.icon} aria-hidden="true"/></a>
                );
            }

            projects_content.push(
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={divStyle}> <h2 className="mdl-card__title-text">{project.title}</h2></CardTitle>
                    <CardText className="CardText" >{project.text} {icons_content}</CardText>
                </Card>
            );
        }

        return (<div className="project-background">{projects_content}</div>);
    }

    render() {
        let categories_content = [];
        for (let category of Categories) {
            categories_content.push(<Tab>{category.name}</Tab>);
        }

        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    {categories_content}
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                           <div className="content"> {this.toggleCategories()} </div> 
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;