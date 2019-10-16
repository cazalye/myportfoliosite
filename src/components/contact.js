import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col="6">
                        <h2>Emma Cazaly</h2>
                        <img src="img/Me.jpg" alt="me" style={{height:'250px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>ipsum lorem dolor sit</p>
                    </Cell>
                    <Cell col="6">
                        <h2>Contact Me</h2>
                        <hr/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;