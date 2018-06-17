import React from 'react';
import burgundy from '../details/img/burgundy.jpg';
import reisling from '../details/img/reisling.jpg';
import pinot from '../details/img/pinot.jpg';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Winelist.css';


class Winelist extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3}><Image src={burgundy} alt="Burgundy" className="wine-pic" rounded={true} responsive={true}/></Col>
          <Col xs={9}> Description </Col>
        </Row>
        <Row>
          <Col xs={3}><Image src={reisling} alt="Reisling" className="wine-pic" rounded={true} responsive={true}/></Col>
          <Col xs={9}> Description </Col>
        </Row>
        <Row>
          <Col xs={3}><Image src={pinot} alt="Pinot Noir" className="wine-pic" rounded={true} responsive={true}/></Col>
          <Col xs={9}> Description </Col>
        </Row>
      </Grid>
    )
  }
};

export default Winelist;
