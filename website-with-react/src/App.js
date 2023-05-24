import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Footer } from './components';
import { Header } from './components';
import styles from './Styles/Base.scss'


  function App() {
    constructor(props){
      super(props)
  
      this.state = {
  
      }

      return (
      <HashRouter>
      <Layout className="layout" style={{ height: "100%" }}>

        {/*Header part  */}
        <Header />

        {/* Main part */}
        <Content style={{ backgroundColor: '#fff' }}>
        <Route path="/movie/:type/:page" component={MovieList}></Route>
        </Content>
        {/* Footer part */}
        <Footer />
        
      </Layout>
    </HashRouter>
    )}}

export default App;
