import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume-col resume-left-col" col={4}> 
                        <div className="resume-col-content">
                            <img src="https://image.shutterstock.com/image-vector/woman-working-laptop-character-260nw-1044466321.jpg"
                                alt="avatar"/>
                        </div>
                        
                        <h2>Emma Cazaly</h2>
                        <h4>Designer</h4>
                        <hr/>
                        <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                        <hr/>
                        <h5>Address</h5>
                        <p>Hameentie 27D 95</p>
                        <h5>Phone</h5>
                        <p>+358 417077974</p>
                        <h5>Email</h5>
                        <p>e.cazaly7@gmail.com</p>
                        <h5>Web</h5>
                        <p>cazalye.com</p>
                        <hr/>
                    </Cell>
                    <Cell className="resume-col resume-right-col" col={8}> right side </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;