import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Grid fluid={true} responsive={true}>
          <Row>
            <Col xsHidden={true} md={3}> <Sidebar /> </Col>
            <Col xs={12} md={9}> <Main /> </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default App;
