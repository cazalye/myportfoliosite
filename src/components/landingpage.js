import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src="https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170619912/81143751-male-traveler-or-tourist-avatar-with-camera-icon-image-vector-illustration-design.jpg" 
                        alt="travel avatar"
                        className="avatar-img"/>
                        
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS | Bootstrap | JavaScript | React</p>
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