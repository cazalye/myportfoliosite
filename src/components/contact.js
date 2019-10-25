import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={8}>
                        <img src="/img/Me_portrait.jpg" alt="me" style={{height:'320px'}}/>
                    </Cell>
                    <Cell className="contact-grid-cell-right" col={4}>
                        <h2>Contact Me </h2>
                        {/* <p> A designer who codes</p> */}
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