import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class About extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                   <div className="aboutme-background">
                   </div>
                </Cell>
                <Cell col={6}>   
                    <div className="aboutme-text">
                        <h1>About Me</h1>
                        <p>I am a designer and front-end developer who creates evocative websites and stationery, centered around adventure, conscious living and environmental awareness.</p>
                    </div>
                </Cell>
            </Grid>

        )
    }
}

export default About;