import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src="https://image.shutterstock.com/image-vector/woman-working-laptop-character-260nw-1044466321.jpg"
                        alt="female design avatar"
                        className="avatar-img"/>
                        
                        <div className="banner-text">
                            <h1>Web Designer & Front-end Developer</h1>
                            <hr/>
                            <p> HTML/CSS | JavaScript | React | Shopify? | Adobe Suite | InVision | Photography </p>
                            <div className="social-links"> 

                                <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>

                                <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;