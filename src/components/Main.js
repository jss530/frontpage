import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Main.css';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="hero-image">
              <h1 className="hero-text">Drinking buddies<br/>
              Because drinking together is just more fun.</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Main;
