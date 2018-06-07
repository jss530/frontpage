import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <Col sm={{ size: 12, fluid: true }} md={{ size: 8, fluid: true }}> <Main /> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Container.propTypes = {
  fluid:  PropTypes.bool
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

export default App;
