import React from 'react';
import { Grid, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import profile from '../details/img/main.jpg';
import './Main.css';


class Main extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Image src={ profile } alt="Main image" className="image" rounded={true} responsive={true}/>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
          </Jumbotron>
        </Row>
      </Grid>
    );
  };
};

export default Main;
