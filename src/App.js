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
        <Container>
          <Row>
            <Col xs="3">
              <Sidebar />
            </Col>
            <Col xs="9">
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
