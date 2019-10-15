import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> REACT Project 1</CardTitle>
                        <CardText>
                            Lorem Ispsum dolor sit amet
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> LiveDemo </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> REACT Project 2</CardTitle>
                        <CardText>
                            Lorem Ispsum dolor sit amet
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> LiveDemo </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                 </div>
            )

        } else if(this.state.activeTab === 1){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Project 2</CardTitle>
                        <CardText>
                            Lorem Ispsum dolor sit amet
                        </CardText>
                        <CardActions border>
                            <Button colored> xx </Button>
                            <Button colored> xx </Button>
                            <Button colored> xx </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )

        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Project 3</CardTitle>
                        <CardText>
                            Lorem Ispsum dolor sit amet
                        </CardText>
                        <CardActions border>
                            <Button colored> xx </Button>
                            <Button colored> xx </Button>
                            <Button colored> xx </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                 </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Project 4</CardTitle>
                        <CardText>
                            Lorem Ispsum dolor sit amet
                        </CardText>
                        <CardActions border>
                            <Button colored> xx </Button>
                            <Button colored> xxxx </Button>
                            <Button colored> xx </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        
    }



    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab> Project1 </Tab>
                    <Tab> Project2 </Tab>
                    <Tab> Project3 </Tab>
                    <Tab> Project4 </Tab>
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