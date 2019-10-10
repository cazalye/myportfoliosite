import React from 'react';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
