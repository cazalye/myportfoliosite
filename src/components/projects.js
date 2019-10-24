// This whole file needs to be redone to have a proper MVC.

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
                <div className="project-background">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Portfolio </CardTitle>
                        <CardText>
                            Cazalye: my personal portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> LiveDemo </Button>
                            <Button colored> OTHER?? </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Travel Blog </CardTitle>
                        <CardText>
                            Viatrix: a travel blog sharing my adventures and advice as a solo female traveller
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> LiveDemo </Button>
                            <Button colored> OTHER?? </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> E-commerce </CardTitle>
                        <CardText>
                            Write it on Stone: an e-commerce site specialising in beautiful, ec-friendly stone paper stationery
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> LiveDemo </Button>
                            <Button colored> OTHER?? </Button>
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
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Web Design </CardTitle>
                        <CardText>
                            Design of Viatrix
                        </CardText>
                        <CardActions border>
                            <Button colored> Photoshop </Button>
                            <Button colored> InVision </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> 2020 Journal</CardTitle>
                        <CardText>
                            Minimal yet beautiful stone paper journal
                        </CardText>
                        <CardActions border>
                            <Button colored> InDesign </Button>
                            <Button colored> InVIsion? </Button>
                            <Button colored> Photos? </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Postcards </CardTitle>
                        <CardText>
                            Minimal, beautiful stone paper postcards
                        </CardText>
                        <CardActions border>
                            <Button colored> Photography </Button>
                            <Button colored> InDesign </Button>
                            <Button colored> Demo? </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Logo & Business Cards </CardTitle>
                        <CardText>
                            Minimal yet evocative logo design & business cards printed on stone paper
                        </CardText>
                        <CardActions border>
                            <Button colored> Illustrator </Button>
                            <Button colored> InDesign </Button>
                            <Button colored> Photos </Button>
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
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Travel Blog </CardTitle>
                        <CardText>
                            Viatrix: engaging, SEO optimised travel copy
                        </CardText>
                        <CardActions border>
                            <Button colored> Blog post 1 </Button>
                            <Button colored> Blog post 2 </Button>
                            <Button colored> Blog post 3 </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> 2020 Journal </CardTitle>
                        <CardText>
                            2020 Journal: inspiring, minimal copy
                        </CardText>
                        <CardActions border>
                            <Button colored> snapshot 1 </Button>
                            <Button colored> snapshot 2 </Button>
                            <Button colored> snapshot 3 </Button>
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
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Digital </CardTitle>
                        <CardText>
                            Shot with: Sony a7
                        </CardText>
                        <CardActions border>
                            <Button colored> Gallery </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                     <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Analogue </CardTitle>
                        <CardText>
                            Shot with: Canon AE1
                        </CardText>
                        <CardActions border>
                            <Button colored> Gallery </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> LR Presets </CardTitle>
                        <CardText>
                            A selection of my Lightroom Presets
                        </CardText>
                        <CardActions border>
                            <Button colored> Autumn </Button>
                            <Button colored> Mountains </Button>
                            <Button colored> Seaside </Button>
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
                    <Tab> Development </Tab>
                    <Tab> Design </Tab>
                    <Tab> Copy </Tab>
                    <Tab> Photography </Tab>
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