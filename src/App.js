import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col xs={10}>
              <h1>Front page</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
