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
                        {/* <h1>About Me</h1> */}
                        <h2>I'm a designer and front-end developer with a passion for photography and travel. </h2>
                        {/* <hr/> */}
                        <p>I create evocative websites, catchy copy and inspiring stationery, centered around adventure, conscious living and environmental awareness. </p>
                        {/* <hr/> */}
                        <p> I hold both Australian and Italian citzenship.</p>
                        {/* <hr/> */}
                        <p>Visit me at <a href="https://www.cazalye.com">cazalye.com</a></p> 
                    </div>
                </Cell>
            </Grid>

        )
    }
}

export default About;