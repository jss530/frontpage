import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {Container, Row, Col} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Row>
            <Col> <Sidebar /> </Col>
            <Col sm="12" md="8"> <Main /> </Col> /*specify that I want Main to take up screen for smaller screens */
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
