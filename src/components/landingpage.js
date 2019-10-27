import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1> Emma Cazaly</h1>
                            <h2>Web Designer & Front-end Developer</h2>
                            {/* <hr/> */}
                            <p> HTML/CSS | JavaScript | React | Shopify? | Adobe Suite | Photography </p>
                            <div className="social-links"> 
                                {/* <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;