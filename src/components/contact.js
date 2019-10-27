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
                    <h5> <strong>Address:</strong> Hameentie 27D 95</h5>
                    <h5> <strong>Phone:</strong> +358 417077974</h5>
                    <h5> <strong>Email:</strong> e.cazaly7@gmail.com </h5>
                    <h5> <strong>Web:</strong> cazalye.com</h5>
                </div>
                <div className="contact-edge"/>
            </div>
        )
    }
}

export default Contact;