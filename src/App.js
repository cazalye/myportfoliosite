import React from 'react';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Footer from './components/footer';

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
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/" onClick={() => this.hideToggle()} className="header-title-drawer"> Emma Cazaly </Link>}>
                        <Navigation>
                            <Link onClick={() => this.hideToggle()} to="/aboutme">About Me</Link>
                            <Link onClick={() => this.hideToggle()} to="/projects">Projects</Link>
                            <Link onClick={() => this.hideToggle()} to="/resume">Resume</Link>
                            <Link onClick={() => this.hideToggle()} to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                    <Footer> 
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default App;
