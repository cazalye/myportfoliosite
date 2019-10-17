import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col="6">
                        <h2>Emma Cazaly</h2>
                        <img src="img/Me.jpg" alt="me" style={{height:'250px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>I'm a designer and front-end developer with a passion for photography and travel.
                         ..."I'm a designer who codes" seems to be a catchy phrase thrown about by people like Andrew Couldwell & Meagan Fisher</p>
                    </Cell>
                    <Cell col="6">
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-item-content">
                                       <i className="fa fa-phone-square" aria-hidden="true"></i>
                                            <a href="tel: +358-417077974">+358-417077974</a>
                                     </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-content">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        e.cazaly7@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;