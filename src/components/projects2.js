// This whole file needs to be redone to have a proper MVC.

import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
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

            let buttons_content = [];
            for (let button of project.buttons) {
                buttons_content.push(<Button colored> {button.text} </Button>);
            }

            let divStyle = {
                background: 'url(' + project.image + ') center/cover',
                color: 'white',
                height:'176px',
            };

            projects_content.push(
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={divStyle}> <h2 className="mdl-card__title-text">{project.title}</h2> </CardTitle>
                        <CardText>{project.text}</CardText>
                        <CardActions border>
                            {buttons_content}
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
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