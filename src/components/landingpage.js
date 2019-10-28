import React, {Component} from 'react';
class Landing extends Component {
    componentDidMount() {
        // preload the about me background image
        setTimeout(() => {
            let img = document.getElementsByClassName("ghost-me");
            if (img.length) {
                console.log("adding class")
                img[0].classList.add("ghost-me-active");
            }
        }, 5000)
    }
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <div className="ghost-me"></div>
                <div className='landing-grid'>
                    <div col={12}>
                        <div className="banner-text">
                            <h1> Emma Cazaly</h1>
                            <h2>Web Designer & Front-end Developer</h2>
                            {/* <hr/> */}
                            <p> HTML/CSS | JavaScript | React | Shopify | Adobe Suite | Photography </p>
                            <div className="social-links"> 
                                {/* <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="htps://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Landing;