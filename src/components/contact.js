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
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit ipsum lorem dolor sit</p>
                    </Cell>
                    <Cell col="6">
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-item-content">
                                       <i className="fa fa-phone-square" aria-hidden="true"></i>
                                       +358 123 456
                                     </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-content">
                                        <i className="fa fa-fax" aria-hidden="true"></i>
                                        358 123 456
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-content">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        me@gmail.com
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