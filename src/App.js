import React from 'react';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends React.Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link to="/" className="header-title"> Emma Cazaly </Link>} scroll>
                        <Navigation>
                            <Link to="/projects">Projects</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/aboutme">About Me</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/" onClick={() => this.hideToggle()} className="header-title-drawer"> Emma Cazaly </Link>}>
                        <Navigation>
                            <Link onClick={() => this.hideToggle()} to="/projects">Projects</Link>
                            <Link onClick={() => this.hideToggle()} to="/resume">Resume</Link>
                            <Link onClick={() => this.hideToggle()} to="/contact">Contact</Link>
                            <Link onClick={() => this.hideToggle()} to="/aboutme">About Me</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default App;
