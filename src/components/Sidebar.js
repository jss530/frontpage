import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import sparkling from '../details/img/sparkling.jpg';
import redWine from '../details/img/Wine-1.jpg';
import tours from '../details/img/Wine-tour.jpg';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Image src={ redWine } className="sidebar-image" />
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Image src={ tours } className="sidebar-image" />
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Image src={ sparkling } className="sidebar-image" />
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Row>
      </Grid>
    );
  };
};

export default Sidebar;
