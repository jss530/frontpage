import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import profile from '../details/img/main.jpg';
import './Main.css';


class Main extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Image src={ profile } alt="Main image" className="image"/>
        </Row>
      </Grid>
    );
  };
};

export default Main;
