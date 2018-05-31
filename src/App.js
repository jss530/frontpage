import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container className="body">
          <Row>
            <Col xs="2">
              <Sidebar />
            </Col>
            <Col xs="auto">
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
