import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab> Project1 </Tab>
                    <Tab> Project2 </Tab>
                    <Tab> Project3 </Tab>
                    <Tab> Project4 </Tab>
                </Tabs>
                {/* <section className="projects-grid">
                    {this.toggleCategories()}
                </section> */}
            </div>
        )
    }
}

export default Projects;