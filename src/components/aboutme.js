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
                        <p>I am a designer and front-end developer with a passion for photography and travel. I create evocative websites, catchy copy and inspiring stationery. My work centers around adventure, conscious living and environmental awareness.
                        </p>
                        <a href="https://www.cazalye.com">Visit me at cazalye.com</a>
                    </div>
                </Cell>
            </Grid>

        )
    }
}

export default About;