import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer-links"> 
                <a href="https://github.com/cazalye" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-envelope" aria-hidden="true" />
                </a>
                <a href="tel:+358417077974" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-phone" aria-hidden="true" />
                </a>
                <a href="https:cazalye.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-globe" aria-hidden="true" />
                </a>
            </div>
        )
    }
}

export default Footer;
