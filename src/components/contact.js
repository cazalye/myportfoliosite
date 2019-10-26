import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <div className="left-box">
                    <img src="/img/Me_portrait.jpg" alt="me" style={{height:'320px'}}/>
                </div>
                <div className="right-box">
                    <h2>Contact Me </h2>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    <a href="tel: +358-417077974">+358-417077974</a>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:e.cazaly7@gmail.com">e.cazaly7@gmail.com</a>
                </div>
                <div className="contact-edge"/>
            </div>
        )
    }
}

export default Contact;