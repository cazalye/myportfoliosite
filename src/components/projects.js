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
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Portfolio Website</CardTitle>
                        <CardText>
                            Created using React<br/>cazalye.com/portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> "website url" </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Travel Blog </CardTitle>
                        <CardText>
                            Created using React & Wordpress<br/>cazalye.com/travel
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> "website url" </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> E-commerce </CardTitle>
                        <CardText>
                            Created using React? & Shopify<br/>cazalye.com/shop
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> "website url" </Button>
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
                            Design of Travel blog
                        </CardText>
                        <CardActions border>
                            <Button colored> Photoshop / Adobe XD </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Web Design </CardTitle>
                        <CardText>
                            Design of Digital photo diaries
                        </CardText>
                        <CardActions border>
                            <Button colored> Photoshop / Adobe XD </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Gratitude Journal</CardTitle>
                        <CardText>
                            Minimal yet beautiful stone paper journal
                        </CardText>
                        <CardActions border>
                            <Button colored> InDesign </Button>
                            <Button colored> Photography + LR </Button>
                            <Button colored> KDP </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Postcards </CardTitle>
                        <CardText>
                           xxxxxxxxxxx
                        </CardText>
                        <CardActions border>
                            <Button colored> InDesign </Button>
                            <Button colored> Photography + LR </Button>
                        </CardActions>
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Logo </CardTitle>
                        <CardText>
                            Minimal yet evocative logo design
                        </CardText>
                        <CardActions border>
                            <Button colored> Illustrator </Button>
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
                            Engaging, SEO optimised travel copy
                            some link to google rank?
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
                        <CardTitle style={{color:'white', height:'176px', background:'url(https://cdn.dribbble.com/users/1242303/screenshots/3764479/day34.png) center/cover'}}> Gratitude Journal </CardTitle>
                        <CardText>
                            Gratitude Journal: inspiring, minimal copy
                        </CardText>
                        <CardActions border>
                            <Button colored> About Page </Button>
                            <Button colored> Summary on KDP </Button>
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
                            <Button colored> Gallery 5 photos </Button>
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
                            <Button colored> Gallery 5 photos </Button>
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

{/* Add link to cazalye.com/photodiaries for more images */}

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