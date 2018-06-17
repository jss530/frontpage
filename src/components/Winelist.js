import React from 'react';
import burgundy from '../details/img/burgundy.jpg';
import reisling from '../details/img/reisling.jpg';
import pinot from '../details/img/pinot.jpg';
import { Grid, Row, Col, Image } from 'react-bootstrap';


class Winelist extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col> Image </Col>
          <Col> Description </Col>
        </Row>
      </Grid>
    )
  }
};

export default Winelist;
